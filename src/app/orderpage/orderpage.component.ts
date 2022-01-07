import { first, tap } from 'rxjs/operators';
import { CartDto } from './../../core/interfaces/cart.interface';
import { switchMap } from 'rxjs/operators';
import { Address } from './../../core/interfaces/addresses.interface';
import { BehaviorSubject, Subject, of, from } from 'rxjs';
import { CustomerCartService } from './../cart/services/customer-cart.service';
import { Configuration } from 'src/core/configuration';
import { NewAddressComponent } from './../ui-kit/new-address/new-address.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { BottomTabDiscountComponent } from '../ui-kit/bottom-tab-discount/bottom-tab-discount.component';
import { BottomTabInprogressComponent } from '../ui-kit/bottom-tab-inprogress/bottom-tab-inprogress.component';
import { AddressesService } from 'src/core/services/addresses.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
declare var L: any;

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss'],
})
export class OrderpageComponent implements OnInit {
  @ViewChild('map') map: ElementRef;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  form: FormGroup;
  $addresses = new BehaviorSubject<Array<Address>>([]);
  $cart = new BehaviorSubject<CartDto>({
    total: 0,
    totalDiscount: 0,
    _id: '',
    items: [],
    ownerId: '',
    status: 0,
  });

  $fetchAddress = new Subject<any>();
  $selectedAddress: BehaviorSubject<string>;
  myMap: any;
  marker: any;
  addrClosed: boolean;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private customerCartService: CustomerCartService,
    private addressesService: AddressesService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      cart: [],
      address: [],
    });

    this.$fetchAddress
      .pipe(
        switchMap(() => {
          console.log('here');
          return this.addressesService.getAllAddresses();
        })
      )
      .subscribe((res: Address[]) => {
        this.$addresses.next(res);
        from(res)
          .pipe(first())
          .subscribe(
            (x: Address) =>
              (this.$selectedAddress = new BehaviorSubject<string>(x._id))
          );
      });
  }

  openInProgress(): void {
    this._bottomSheet.open(BottomTabInprogressComponent);
  }
  openDiscount(): void {
    const ref = this._bottomSheet.open(BottomTabDiscountComponent, {
      data: { cartId: this.$cart.value._id },
    });
    ref.afterDismissed().subscribe(() => {
      this.customerCartService.getOpenCart().subscribe((cart: CartDto) => {
        this.$cart.next(cart);
      });
    });
  }
  openAddress(): void {
    const ref = this._bottomSheet.open(NewAddressComponent);
    ref.afterDismissed().subscribe((address: Address) => {
      this.addressesService.getAllAddresses().subscribe((addresses) => {
        this.$addresses.next(addresses);
        this.$selectedAddress = new BehaviorSubject<any>(address._id);
        this.myMap.panTo(new L.LatLng(address.lat, address.lng));
        this.marker.setLatLng(this.myMap.getCenter());
      });
    });
  }
  ngOnInit(): void {
    this.$fetchAddress.next();
    this.myMap = new L.Map('map', {
      key: Configuration.NeshanWebMapApiToken,
      maptype: 'neshan',
      poi: true,
      traffic: false,
      center: [35.699739, 51.338097],
      zoom: 14,
      dragging: false,
      zoomControl: false,
      scrollWheelZoom: false,
    });
    this.marker = L.marker([35.699739, 51.338097]).addTo(this.myMap);
    this.customerCartService.getOpenCart().subscribe((cart: CartDto) => {
      this.$cart.next(cart);
    });
  }

  onRadioChange(e) {
    this.form.controls['address'].setValue(e.value);
    console.log(this.form.value);
    const addr = this.$addresses.value.find((x) => x._id == e.value);
    console.log(addr);
    this.myMap.panTo(new L.LatLng(addr.lat, addr.lng));
    this.marker.setLatLng(this.myMap.getCenter());
    this.accordion.closeAll();
  }
}
