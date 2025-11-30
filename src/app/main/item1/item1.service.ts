import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CountryDto {
  name: { common: string };
  capital?: string[];
  population?: number;
}

@Injectable({ providedIn: 'root' })
export class Item1Service {
  constructor(private http: HttpClient) {}

  fetchCountries(): Observable<CountryDto[]> {
    return this.http.get<CountryDto[]>(
      'https://restcountries.com/v3.1/region/europe'
    );
  }

  searchCountryByName(name: string): Observable<CountryDto[]> {
    return this.http.get<CountryDto[]>(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`
    );
  }
}
