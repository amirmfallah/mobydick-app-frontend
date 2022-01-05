import { Configuration } from 'src/core/configuration';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NeshanService {
  constructor(private http: HttpClient) {}
  getPointByAddress(address: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('address', address);

    return this.http.get(`${Configuration.NeshanUri}/geocoding`, {
      params: params,
      headers: {
        ['Api-Key']: Configuration.NeshanServiceApiToken,
      },
    });
  }
}
