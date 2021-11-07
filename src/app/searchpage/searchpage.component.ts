import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss'],
})
export class SearchpageComponent implements OnInit {
  searchitems = [
    {
      image: 'assets/brunch.png',
      title: 'صبحانه و برانچ',
    },
    {
      image: 'assets/desert.png',
      title: 'دسرها',
    },
    {
      image: 'assets/cake.png',
      title: 'شیرینی',
    },
    {
      image: 'assets/burgers.png',
      title: 'برگرها',
    },
    {
      image: 'assets/brunch.png',
      title: 'صبحانه و برانچ',
    },
    {
      image: 'assets/desert.png',
      title: 'دسرها',
    },
    {
      image: 'assets/cake.png',
      title: 'شیرینی',
    },
    {
      image: 'assets/burgers.png',
      title: 'برگرها',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
