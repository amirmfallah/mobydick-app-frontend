import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.scss'],
})
export class BranchesListComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BranchesListComponent>
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  ngOnInit(): void {}
}
