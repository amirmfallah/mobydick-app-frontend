import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomTabDiscountComponent } from '../ui-kit/bottom-tab-discount/bottom-tab-discount.component';
import { BottomTabInprogressComponent } from '../ui-kit/bottom-tab-inprogress/bottom-tab-inprogress.component';
@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss']
})
export class OrderpageComponent implements OnInit {
  item=
  {
    image: 'assets/pizza-sub.jpg',
    title: 'پیتزا صاب',
    description: 'ژامبون، گوشت، پنیر',
    price: 40000
  }
   
  
  constructor(private _bottomSheet: MatBottomSheet) {}

  openInProgress(): void {
    this._bottomSheet.open(BottomTabInprogressComponent);
  }
  openDiscount(): void {
    this._bottomSheet.open(BottomTabDiscountComponent);
  }
  ngOnInit(): void {
  }

}

