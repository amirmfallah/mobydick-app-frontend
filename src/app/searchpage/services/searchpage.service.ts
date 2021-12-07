import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from './../../../core/configuration';
@Injectable({
  providedIn: 'root',
})
export class SearchpageService {
  constructor(private http: HttpClient) {}
  getCategories(): Observable<any> {
    return this.http.get(`${Configuration.MobydickApiUrl}/api/v1/categories`);
  }
}
