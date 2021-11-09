import { Component, OnInit } from '@angular/core';

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
   
  
  constructor() { }

  ngOnInit(): void {
  }

}
