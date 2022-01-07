import { AddressesService } from 'src/core/services/addresses.service';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { debounce, map } from 'rxjs/operators';
import { Configuration } from 'src/core/configuration';
import { NeshanService } from './../../../core/services/neshan.service';
import { Observable, Subject, interval, BehaviorSubject } from 'rxjs';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Address } from 'src/core/interfaces/addresses.interface';
declare var L: any;

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss'],
})
export class EditAddressComponent implements OnInit {
  form = this.fb.group({
    address: ['', Validators.required],
    phone: ['', Validators.required],
    lng: [],
    lat: [],
  });
  $address: Observable<any>;
  subject = new Subject();
  $getLocation = new BehaviorSubject<any>(undefined);

  constructor(
    private fb: FormBuilder,
    private neshanService: NeshanService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { address: Address },
    private _bottomSheetRef: MatBottomSheetRef<EditAddressComponent>,
    private addressesService: AddressesService
  ) {
    this.form.controls['address'].setValue(this.data.address.address);
    this.form.controls['phone'].setValue(this.data.address.phone);
    this.form.controls['lng'].setValue(this.data.address.lng);
    this.form.controls['lat'].setValue(this.data.address.lat);
  }

  ngOnInit(): void {
    var newMap = new L.Map('editMap', {
      key: Configuration.NeshanWebMapApiToken,
      maptype: 'neshan',
      poi: true,
      traffic: false,
      center: [this.data.address.lat, this.data.address.lng],
      zoom: 14,
      zoomControl: false,
    });

    var marker = L.marker([this.data.address.lat, this.data.address.lng]).addTo(
      newMap
    );
    const updatePoint = (point) => {
      this.form.get('lng').setValue(point.lng);
      this.form.get('lat').setValue(point.lat);
    };

    newMap.on('move', function () {
      marker.setLatLng(newMap.getCenter());
      updatePoint(newMap.getCenter());
    });

    this.$address = this.subject.pipe(
      debounce(() => interval(1000)),
      map((addr) =>
        this.neshanService.getPointByAddress(<string>addr).subscribe((x) => {
          console.log(x);
          if (x.status != 'NO_RESULT') {
            newMap.panTo(new L.LatLng(x.location.y, x.location.x));
          }
        })
      )
    );

    this.$address.subscribe((x) => console.log(x));
  }

  addressUpdated(e) {
    this.subject.next(this.form.get('address').value);
  }
  submitAddress() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form.value);
    this.form.disable();
    this.addressesService
      .patchAddress(this.data.address._id, this.form.value)
      .subscribe(
        (res: Address) => {
          this.form.enable;
          this._bottomSheetRef.dismiss(res);
          event.preventDefault();
        },
        (err) => {
          this.form.enable();
        }
      );
  }
}
