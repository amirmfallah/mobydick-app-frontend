import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  @Input() price=20000;
  @Input() discountPercentage=10;
  
  CalcPrice() {
    this.price= this.price-(this.price*(this.discountPercentage/100));
  }
  constructor() { }

  ngOnInit(): void {
    this.CalcPrice();
  }

}
