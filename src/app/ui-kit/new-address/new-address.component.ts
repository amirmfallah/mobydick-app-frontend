import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Address } from './../../../core/interfaces/addresses.interface';
import { interval, Observable, Subject, BehaviorSubject } from 'rxjs';
import { NeshanService } from './../../../core/services/neshan.service';
import { Configuration } from './../../../core/configuration';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounce, map } from 'rxjs/operators';
import { AddressesService } from 'src/core/services/addresses.service';
declare var L: any;

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.scss'],
})
export class NewAddressComponent implements OnInit {
  form = this.fb.group({
    address: ['', Validators.required],
    phone: [],
    lng: [],
    lat: [],
  });
  $address: Observable<any>;
  subject = new Subject();
  $getLocation = new BehaviorSubject<any>(undefined);

  constructor(
    private fb: FormBuilder,
    private neshanService: NeshanService,
    private addressesService: AddressesService,
    private _bottomSheetRef: MatBottomSheetRef<NewAddressComponent>
  ) {}

  ngOnInit(): void {
    var newMap = new L.Map('newMap', {
      key: Configuration.NeshanWebMapApiToken,
      maptype: 'neshan',
      poi: true,
      traffic: false,
      center: [35.699739, 51.338097],
      zoom: 14,
      zoomControl: false,
    });
    console.log(newMap.getCenter());
    console.log(L);
    var marker = L.marker([35.699739, 51.338097]).addTo(newMap);

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

    this.$getLocation.subscribe(() => {
      navigator.geolocation.getCurrentPosition((x) => {
        newMap.panTo(new L.LatLng(x.coords.latitude, x.coords.longitude));
      });
    });
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
    this.addressesService.newAddress(this.form.value).subscribe(
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
