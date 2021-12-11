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
  branches: Array<branchSearch>;
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BranchesListComponent>,
    private branchesService: BranchesService,
    private route: ActivatedRoute
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  ngOnInit(): void {
    this.branchesService.getBranches().subscribe((res: branchSearch[]) => {
      this.branches = res;
      console.log(this.branches);
    });
  }
}
