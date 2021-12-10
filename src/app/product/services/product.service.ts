import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Configuration } from './../../../core/configuration';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct(id: string): Observable<any> {
    return this.http.get(
      `${Configuration.MobydickApiUrl}/api/v1/products/${id}`
    );
  }
}
