import { BehaviorSubject } from 'rxjs';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Component, OnInit } from '@angular/core';
import { BranchesService } from './services/branches.service';
import { ActivatedRoute } from '@angular/router';
import { branchSearch } from './interfaces/branch.interfaces';

@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.scss'],
})
export class BranchesListComponent implements OnInit {
  branches = new BehaviorSubject<branchSearch[]>(undefined);
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BranchesListComponent>,
    private branchesService: BranchesService,
    private route: ActivatedRoute
  ) {}

  openLink(event: MouseEvent, branch): void {
    this.branchesService.selectedBranch.next(branch);
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  ngOnInit(): void {
    this.branchesService.branches.subscribe((res: branchSearch[]) => {
      this.branches.next(res);
    });
  }
}
