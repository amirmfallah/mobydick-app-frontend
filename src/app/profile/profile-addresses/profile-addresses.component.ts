import { Address } from './../../../core/interfaces/addresses.interface';
import { BehaviorSubject } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Component, OnInit } from '@angular/core';
import { EditAddressComponent } from 'src/app/ui-kit/edit-address/edit-address.component';
import { AddressesService } from 'src/core/services/addresses.service';

@Component({
  selector: 'app-profile-addresses',
  templateUrl: './profile-addresses.component.html',
  styleUrls: ['./profile-addresses.component.scss'],
})
export class ProfileAddressesComponent implements OnInit {
  addresses = new BehaviorSubject<Address[]>(undefined);
  constructor(
    private _bottomSheet: MatBottomSheet,
    private addressesService: AddressesService
  ) {
    this.addressesService
      .getAllAddresses()
      .subscribe((x) => this.addresses.next(x));
  }

  ngOnInit(): void {}

  openAddress(address: Address): void {
    const ref = this._bottomSheet.open(EditAddressComponent, {
      data: {
        address: address,
      },
    });
    ref.afterDismissed().subscribe(() => {
      this.addresses.next(undefined);
      this.addressesService
        .getAllAddresses()
        .subscribe((x) => this.addresses.next(x));
    });
  }

  deleteAddress(address: Address) {
    this.addressesService.removeAddress(address._id).subscribe(() => {
      this.addressesService
        .getAllAddresses()
        .subscribe((x) => this.addresses.next(x));
    });
  }
}
