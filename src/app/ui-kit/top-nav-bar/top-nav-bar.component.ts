import { BranchesService } from './../branches-list/services/branches.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';
import { BranchesListComponent } from './../branches-list/branches-list.component';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Route } from '@angular/compiler/src/core';
import { branchSearch } from '../branches-list/interfaces/branch.interfaces';
import * as _ from 'lodash';
@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
})
export class TopNavBarComponent implements OnInit {
  constructor(
    private _bottomSheet: MatBottomSheet,
    private authService: AuthService,
    private router: Router,
    private branchesService: BranchesService
  ) {
    this.branchesService.selectedBranch.subscribe((branch: branchSearch) => {
      this.branchName$.next(_.get(branch, 'name'));
    });
  }
  branchName$ = new BehaviorSubject<string>('');
  openBottomSheet(): void {
    this._bottomSheet.open(BranchesListComponent);
  }
  ngOnInit(): void {}
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/', 'sign-in']);
  }
}
