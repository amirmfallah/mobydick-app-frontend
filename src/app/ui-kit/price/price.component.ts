import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  @Input() price: number;
  @Input() discountPercentage: number;
  pricebeforediscount = 0;

  constructor() {}

  ngOnInit(): void {
    this.pricebeforediscount = this.price;
    if (this.discountPercentage) {
      this.price = this.price - this.price * (this.discountPercentage / 100);
    }
  }
}
