import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  @Input() price: BehaviorSubject<number>;
  @Input() discountPercentage: number;
  pricebeforediscount = new BehaviorSubject<number>(0);

  constructor() {}

  ngOnInit(): void {
    this.pricebeforediscount = this.price;
    if (this.discountPercentage) {
      let price = this.price.getValue();
      this.price.next(price - price * (this.discountPercentage / 100));
    }
  }
}
