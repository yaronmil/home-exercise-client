import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item1Service, CountryDto } from './item1.service';
import { FilterComponent } from './filter/filter.component';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  BehaviorSubject,
  map,
  tap,
  combineLatestWith,
  distinctUntilChanged,
  debounceTime,
  switchMap,
  of,
  catchError,
  share,
  shareReplay,
} from 'rxjs';

@Component({
  selector: 'app-item1',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.scss'],
})
export class Item1Component {
  filter$ = new BehaviorSubject<string>('');

  // Cache the initial European countries load
  private cachedCountries$ = this.item1Service.fetchCountries().pipe(
    tap(() => this.isLoading.set(false)),
    shareReplay(1),
    catchError(() => {
      this.error.set('Failed to load countries.');
      this.isLoading.set(false);
      return of([]);
    })
  );

  filteredCountries = this.filter$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((filter) => {
      const f = filter.trim();
      if (!f) {
        return this.cachedCountries$;
      }
      this.isLoading.set(true);
      this.error.set(null);
      return this.item1Service.searchCountryByName(f).pipe(
        tap(() => this.isLoading.set(false)),
        catchError(() => {
          // On 404 or any error, return empty array and continue stream
          this.isLoading.set(false);
          return of([]);
        })
      );
    })
  );

  isLoading = signal(true);
  error = signal<string | null>(null);

  constructor(private item1Service: Item1Service) {}

  onFilterChange(text: string): void {
    this.filter$.next(text);
  }
}
