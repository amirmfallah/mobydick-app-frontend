import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Component, OnInit } from '@angular/core';
import { EditAddressComponent } from 'src/app/ui-kit/edit-address/edit-address.component';

@Component({
  selector: 'app-profile-addresses',
  templateUrl: './profile-addresses.component.html',
  styleUrls: ['./profile-addresses.component.scss'],
})
export class ProfileAddressesComponent implements OnInit {
  addresses = [
    { address: 'رشت-خیابان نامجو' },
    {
      address:
        ' مشهد-خیابان فردوسمشهد-خیابان فردوسمشهد-خیابان فردوسمشهد-خیابان فردوسمشهد-خیابان فردوسمشهد-خیابان فردوسمشهد-خیابان فردوسی',
    },
    { address: 'رشت-خیابان نامجو' },
    { address: 'رشت-خیابان نامجو' },
    { address: 'رشت-خیابان نامجو' },
    { address: 'رشت-خیابان نامجو' },
    { address: 'رشت-خیابان نامجو' },
    { address: 'رشت-خیابان نامجو' },
    { address: 'رشت-خیابان نامجو' },
    { address: 'رشت-خیابان نامجو' },
    { address: 'رشت-خیابان نامجو' },
    { address: 'رشت-خیابان نامجو' },
    { address: 'رشت-خیابان نامجو' },
  ];
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  openAddress(): void {
    this._bottomSheet.open(EditAddressComponent);
  }
}
