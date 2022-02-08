import { BranchesService } from './../ui-kit/branches-list/services/branches.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from './services/orders.service';
import { OrderDto, OrderExistingDto } from './interfaces/orders.interface';
import {
  first,
  map,
  skip,
  skipUntil,
  tap,
  filter,
  catchError,
} from 'rxjs/operators';
import { CartDto, CartStatus } from './../../core/interfaces/cart.interface';
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
import * as _ from 'lodash';
import { BranchesListComponent } from '../ui-kit/branches-list/branches-list.component';
declare var L: any;

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss'],
})
export class OrderpageComponent implements OnInit {
  @ViewChild('map') map: ElementRef;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  $loading = new BehaviorSubject<boolean>(false);

  form: FormGroup;
  $addresses = new BehaviorSubject<Array<Address>>([]);
  $cart = new BehaviorSubject<CartDto>({
    _id: '',
    items: [],
    ownerId: '',
    status: CartStatus.OPEN,
  });

  $fetchAddress = new Subject<any>();
  $selectedAddress = new BehaviorSubject<string>('');
  myMap: any;
  marker: any;
  addrClosed: boolean;
  cartId: string;
  $order = new BehaviorSubject<OrderExistingDto>({
    total: 0,
    totalDiscount: 0,
  });
  $refreshOrder = new BehaviorSubject<any>(undefined);

  constructor(
    private _bottomSheet: MatBottomSheet,
    private customerCartService: CustomerCartService,
    private addressesService: AddressesService,
    private fb: FormBuilder,
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private router: Router,
    private branchesService: BranchesService
  ) {
    this.$loading.next(true);
    this.form = this.fb.group({
      cart: [],
      address: [],
    });
    this.cartId = this.route.snapshot.paramMap.get('id');

    this.$refreshOrder
      .pipe(
        skip(1),
        tap(() => {
          this.$loading.next(true);
        })
      )
      .pipe(switchMap(() => this.ordersService.loadOrder(this.cartId)))
      .subscribe(
        (res: OrderExistingDto) => {
          if (res.addressId) {
            this.$selectedAddress.next(_.get(res, 'addressId._id'));
          }
          this.$order.next(res);
          this.$loading.next(false);
        },
        (err) => {
          this.$loading.next(false);
        }
      );
  }

  createOrder(order: OrderDto) {
    this.ordersService
      .createOrder(order)
      .subscribe((order: OrderExistingDto) => {
        this.$order.next(order);
      });
  }

  openInProgress(): void {
    this._bottomSheet.open(BottomTabInprogressComponent);
  }
  openDiscount(): void {
    const ref = this._bottomSheet.open(BottomTabDiscountComponent, {
      data: { cartId: this.$cart.value._id },
    });
    ref.afterDismissed().subscribe((res) => {
      this.$loading.next(true);
      const order = this.$order.value;
      order.giftId = res._id;
      this.ordersService
        .updateOrder({ giftId: res._id }, this.$order.value._id)
        .subscribe(
          () => {
            this.$refreshOrder.next('');
            this.$loading.next(false);
          },
          (err) => {
            this.$loading.next(true);
          }
        );
    });
  }
  openAddress(): void {
    const ref = this._bottomSheet.open(NewAddressComponent);
    ref.afterDismissed().subscribe((address: Address) => {
      this.addressesService.getAllAddresses().subscribe((addresses) => {
        this.$addresses.next(addresses);
        this.$selectedAddress = new BehaviorSubject<any>(address._id);
        this.myMap.panTo(new L.LatLng(address.lat, address.lng));
        this.marker.setLatLng(new L.LatLng(address.lat, address.lng));
      });
    });
  }
  ngOnInit(): void {
    of('')
      .pipe(
        switchMap(() => this.addressesService.getAllAddresses()),
        switchMap((addresses: Address[]) => {
          this.$addresses.next(addresses);
          return from(addresses);
        }),
        first(),
        switchMap((address: Address) => {
          this.$selectedAddress = new BehaviorSubject<string>(address._id);
          this.myMap.panTo(new L.LatLng(address.lat, address.lng));
          this.marker.setLatLng(new L.LatLng(address.lat, address.lng));
          return of(address);
        }),
        switchMap(() => this.ordersService.loadOrder(this.cartId)),
        catchError((err) => {
          if (err instanceof HttpErrorResponse && err.status == 404) {
            return this.ordersService.createOrder({
              addressId: this.$selectedAddress.getValue(),
              branchId: _.get(this.branchesService.selectedBranch.value, '_id'),
              cartId: this.cartId,
            });
          }
          throw err;
        }),
        catchError((err) => {
          this.router.navigate(['/', 'history']);
          throw err;
        })
      )
      .subscribe(
        (order: OrderExistingDto) => {
          this.$order.next(order);
          this.$selectedAddress.next(order.addressId._id);
          this.$loading.next(false);
        },
        (err) => {
          this.$loading.next(false);
        }
      );

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
  }

  onRadioChange(e) {
    this.form.controls['address'].setValue(e.value);
    console.log(this.form.value);
    const addr = this.$addresses.value.find((x) => x._id == e.value);
    console.log(addr);
    this.myMap.panTo(new L.LatLng(addr.lat, addr.lng));
    this.marker.setLatLng(new L.LatLng(addr.lat, addr.lng));
    this.accordion.closeAll();
    this.$loading.next(true);
    this.ordersService
      .updateOrder(
        {
          addressId: addr._id,
        },
        this.$order.value._id
      )
      .subscribe(() => {
        this.$loading.next(false);
      });
  }

  checkout() {
    if (this.branchesService.selectedBranch.value === undefined) {
      this._bottomSheet.open(BranchesListComponent);
      return;
    }
    this.$loading.next(true);
    this.ordersService.checkout(this.$order.value._id).subscribe(
      (res: { url: string }) => {
        this.$loading.next(false);
        console.log(res);
        window.open(res.url);
      },
      (err) => {
        this.$loading.next(false);
      }
    );
  }
}
