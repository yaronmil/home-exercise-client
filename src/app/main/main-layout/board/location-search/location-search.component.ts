import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import {
  debounceTime,
  distinctUntilChanged,
  of,
  Subject,
  switchMap,
} from 'rxjs';

interface NominatimResult {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  address?: {
    road?: string;
    house_number?: string;
    city?: string;
    town?: string;
    village?: string;
    country?: string;
  };
}

@Component({
  selector: 'app-location-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
  ],
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss'],
})
export class LocationSearchComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput', { static: true })
  searchInput!: ElementRef<HTMLInputElement>;
  @Output() locationSelected = new EventEmitter<{
    lat: number;
    lng: number;
    name: string;
    address?: {
      country?: string;
      city?: string;
      street?: string;
    };
  }>();

  predictions: NominatimResult[] = [];
  searchValue: string = '';
  private searchSubject = new Subject<string>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Debounce search input to avoid too many API calls
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) => this.searchNominatim(query))
      )
      .subscribe((results) => {
        this.predictions = results;
      });
  }

  ngOnDestroy(): void {
    this.searchSubject.complete();
  }

  private searchNominatim(query: string) {
    if (!query || query.length < 3) {
      return of([]);
    }
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}&limit=5&addressdetails=1`;
    return this.http.get<NominatimResult[]>(url);
  }

  onInput(value: string): void {
    this.searchValue = value;
    this.searchSubject.next(value);
  }

  optionSelected(result: NominatimResult): void {
    const addressData = this.extractAddress(result);

    this.locationSelected.emit({
      lat: parseFloat(result.lat),
      lng: parseFloat(result.lon),
      name: result.display_name,
      address: addressData,
    });
  }

  private extractAddress(result: NominatimResult): {
    country?: string;
    city?: string;
    street?: string;
  } {
    if (!result.address) {
      return {};
    }

    return {
      country: result.address.country,
      city:
        result.address.city || result.address.town || result.address.village,
      street: result.address.road,
    };
  }

  displayFn(result: NominatimResult | null): string {
    return result ? result.display_name : '';
  }

  onManualEnter(): void {
    // Fallback: if user presses Enter and no API results
    const value = this.searchInput.nativeElement.value.trim();
    if (!value) return;
    this.locationSelected.emit({ lat: NaN, lng: NaN, name: value });
  }

  clearSearch(): void {
    this.searchValue = '';
    this.searchInput.nativeElement.value = '';
    this.predictions = [];
    this.locationSelected.emit({ lat: NaN, lng: NaN, name: '' });
  }
}
