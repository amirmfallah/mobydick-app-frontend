import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { branchSearch } from 'src/app/ui-kit/branches-list/interfaces/branch.interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from 'src/core/configuration';
@Injectable({
  providedIn: 'root',
})
export class GetBranchByIdService {
  constructor(private http: HttpClient) {}
  getBranch(id: string): Observable<any> {
    return this.http.get(
      `${Configuration.MobydickApiUrl}/api/v1/branches/${id}`
    );
  }
}
