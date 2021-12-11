import { Configuration } from './../../../../core/configuration';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private http: HttpClient) { }
  getBranches(): Observable<any> {
    return this.http.get(`${Configuration.MobydickApiUrl}/api/v1/branches`);
  }
}
