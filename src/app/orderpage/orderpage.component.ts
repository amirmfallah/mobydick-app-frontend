import { Configuration } from 'src/core/configuration';
import { NewAddressComponent } from './../ui-kit/new-address/new-address.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { BottomTabDiscountComponent } from '../ui-kit/bottom-tab-discount/bottom-tab-discount.component';
import { BottomTabInprogressComponent } from '../ui-kit/bottom-tab-inprogress/bottom-tab-inprogress.component';
declare var L: any;

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss'],
})
export class OrderpageComponent implements OnInit {
  item = {
    image: 'assets/pizza-sub.jpg',
    title: 'پیتزا صاب',
    description: 'ژامبون، گوشت، پنیر',
    price: 40000,
  };
  @ViewChild('map') map: ElementRef;
  constructor(private _bottomSheet: MatBottomSheet) {}

  openInProgress(): void {
    this._bottomSheet.open(BottomTabInprogressComponent);
  }
  openDiscount(): void {
    this._bottomSheet.open(BottomTabDiscountComponent);
  }
  openAddress(): void {
    this._bottomSheet.open(NewAddressComponent);
  }
  ngOnInit(): void {
    var myMap = new L.Map('map', {
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
    console.log(myMap.getCenter());
    console.log(L);
    var marker = L.marker([35.699739, 51.338097]).addTo(myMap);

    // myMap.on('move', function () {
    //   marker.setLatLng(myMap.getCenter());
    // });
  }
}
