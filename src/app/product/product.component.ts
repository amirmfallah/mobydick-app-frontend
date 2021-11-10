import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  panelOpenState = false;
  product = {
    _id: '1',
    name: 'ساندویچ صاب',
    price: 30000,
    discountPercentage: 10,
    available: true,
    description: 'ژامبون، کالباس، خیارشور',
    thumbnail: 'assets/header.png',
    breads: [
      {
        item: {
          _id: '12',
          name: 'جو',
          price: 8800,
          available: true,
          thumbnail: '',
        },
        required: false,
      },
      {
        item: {
          _id: '4',
          name: 'هفت غله',
          price: 5550,
          available: false,
          thumbnail: '',
        },
        required: false,
      },
    ],
    ingredients: [
      {
        item: {
          _id: '123',
          name: 'خیارشور',
          price: 8000,
          available: true,
          thumbnail: '',
        },
        required: false,
      },
      {
        item: {
          _id: '4',
          name: 'گوجه',
          price: 7000,
          available: true,
          thumbnail: '',
        },
        required: false,
      },
      {
        item: {
          _id: '4',
          name: 'هالوپینو',
          price: 6000,
          available: false,
          thumbnail: '',
        },
        required: false,
      },
    ],
    optional: [
      {
        item: {
          _id: '5',
          name: 'بیکن',
          price: 7770,
          available: true,
          thumbnail: '',
        },
        required: false,
      },
      {
        item: {
          _id: '6',
          name: 'پنیر',
          price: 120,
          available: false,
          thumbnail: '',
        },
        required: false,
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
