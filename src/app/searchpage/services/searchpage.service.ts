import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from './../../../core/configuration';
import { categoryItem } from '../shared/search.interface';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SearchpageService {
  constructor(private http: HttpClient) {}
  getCategories(): Observable<categoryItem[]> {
    return this.http.get(`${Configuration.MobydickApiUrl}/api/v1/categories`).pipe(tap((res: categoryItem[]) => {
      return res;
    }));
  }
}
