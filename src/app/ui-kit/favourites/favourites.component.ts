import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  items=[
    {
      image: 'assets/food.png',
      title: 'کوکی',
      description: 'کوکی بستنی  ولوت',
      price: 40000
    },
    {
      image: 'assets/food.png',
      title: 'ساندویچ کوکی',
      description: 'کوکی بستنی رد ولوت',
      price: 20000
    },
  ]
  constructor() {}

  ngOnInit(): void {}
}
