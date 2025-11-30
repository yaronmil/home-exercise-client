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
import { MatSelectModule } from '@angular/material/select';

declare global {
  interface Window {
    google?: any;
  }
}

@Component({
  selector: 'app-location-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
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
  }>();
  @Output() radiusChanged = new EventEmitter<number>();

  radius = 500; // km
  private autocomplete?: any;
  private listener?: any;

  ngOnInit(): void {
    this.initAutocomplete();
  }

  ngOnDestroy(): void {
    if (this.listener) this.listener.remove();
  }

  private initAutocomplete(): void {
    if (window.google?.maps?.places) {
      this.autocomplete = new window.google.maps.places.Autocomplete(
        this.searchInput.nativeElement,
        {
          fields: ['geometry', 'name', 'formatted_address'],
        }
      );
      this.listener = this.autocomplete.addListener('place_changed', () => {
        const place = this.autocomplete!.getPlace();
        const loc = place.geometry?.location;
        if (loc) {
          this.locationSelected.emit({
            lat: loc.lat(),
            lng: loc.lng(),
            name: place.formatted_address || place.name || 'Selected location',
          });
        }
      });
    }
  }

  onManualEnter(): void {
    // Fallback: if user presses Enter and no Google script, open Maps search
    const value = this.searchInput.nativeElement.value.trim();
    if (!value) return;
    this.locationSelected.emit({ lat: NaN, lng: NaN, name: value });
  }

  onRadiusChange(value: number): void {
    this.radius = value;
    this.radiusChanged.emit(this.radius);
  }
}
