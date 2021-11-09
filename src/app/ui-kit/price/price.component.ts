import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  @Input() price = 200000;
  @Input() discountPercentage = 22;
  pricebeforediscount = 0;
  CalcPrice() {
    this.price = this.price - this.price * (this.discountPercentage / 100);
  }
  constructor() {}

  ngOnInit(): void {
    this.pricebeforediscount = this.price;
    this.CalcPrice();
  }
}
