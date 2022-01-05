import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var L: any;
@Component({
  selector: 'app-your-order',
  templateUrl: './your-order.component.html',
  styleUrls: ['./your-order.component.scss'],
})
export class YourOrderComponent implements OnInit {
  constructor() {}
  @ViewChild('map') map: ElementRef;

  ngOnInit(): void {
    console.log(L);
  }
}
