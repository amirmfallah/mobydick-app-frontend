import { Configuration } from 'src/core/configuration';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../interfaces/addresses.interface';

@Injectable({
  providedIn: 'root',
})
export class AddressesService {
  constructor(private http: HttpClient) {}

  newAddress(address: Address): Observable<any> {
    return this.http.post(
      `${Configuration.MobydickApiUrl}/api/v1/addresses`,
      address
    );
  }

  getAllAddresses(): Observable<any> {
    return this.http.get(`${Configuration.MobydickApiUrl}/api/v1/addresses`);
  }
}
