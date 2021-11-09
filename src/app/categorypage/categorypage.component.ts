import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.scss']
})
export class CategorypageComponent implements OnInit {
  items=[
    {
      image: 'assets/pizza-sub.jpg',
      title: 'پیتزا صاب',
      description: 'ژامبون، گوشت، پنیر',
      price: 40000
    },
    {
      image: 'assets/chicken-salad.jpg',
      title: 'چیکن سالاد',
      description: 'چیکن، گوجه، خیار، پیاز',
      price: 20000
    },
    {
      image: 'assets/pizza-sub.jpg',
      title: 'پیتزا صاب',
      description: 'ژامبون، گوشت، پنیر',
      price: 40000
    },
    {
      image: 'assets/chicken-salad.jpg',
      title: 'چیکن سالاد',
      description: 'چیکن، گوجه، خیار، پیاز',
      price: 20000
    },

    {
      image: 'assets/pizza-sub.jpg',
      title: 'پیتزا صاب',
      description: 'ژامبون، گوشت، پنیر',
      price: 40000
    },
    {
      image: 'assets/chicken-salad.jpg',
      title: 'چیکن سالاد',
      description: 'چیکن، گوجه، خیار، پیاز',
      price: 20000
    },
    {
      image: 'assets/pizza-sub.jpg',
      title: 'پیتزا صاب',
      description: 'ژامبون، گوشت، پنیر',
      price: 40000
    },
    {
      image: 'assets/chicken-salad.jpg',
      title: 'چیکن سالاد',
      description: 'چیکن، گوجه، خیار، پیاز',
      price: 20000
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
