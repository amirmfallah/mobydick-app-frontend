import { Configuration } from './../../../core/configuration';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategorypageService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(`${Configuration.MobydickApiUrl}/api/v1/categories`);
  }

  getProductsByCategory(id: string): Observable<any> {
    return this.http.get(
      `${Configuration.MobydickApiUrl}/api/v1/categories/${id}`
    );
  }
}
