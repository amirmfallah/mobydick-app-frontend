import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss']
})
export class OrderpageComponent implements OnInit {
  item=
    {
      image: 'assets/food.png',
      title: 'کوکی',
      description: 'کوکی بستنی  ولوت',
      price: 40000
    }
   
  
  constructor() { }

  ngOnInit(): void {
  }

}
