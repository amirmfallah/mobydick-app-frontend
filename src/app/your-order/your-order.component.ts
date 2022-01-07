import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomerCartService } from '../cart/services/customer-cart.service';
declare var L: any;
@Component({
  selector: 'app-your-order',
  templateUrl: './your-order.component.html',
  styleUrls: ['./your-order.component.scss'],
})
export class YourOrderComponent implements OnInit {
  constructor() {}
  @ViewChild('map') map: ElementRef;

  ngOnInit(): void {}
}
