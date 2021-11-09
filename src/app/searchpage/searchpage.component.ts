import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss'],
})
export class SearchpageComponent implements OnInit {
  searchitems = [
    {
      image: 'assets/pizza-sub.jpg',
      title: 'ساندویچ ویژه',
    },
    {
      image: 'assets/chicken-salad.jpg',
      title: 'سالادها',
    },
    {
      image: 'assets/spicy-italian.jpg',
      title: 'ساندویچ سرد',
    },
    {
      image: 'assets/roast-beef.jpg',
      title: 'ساندویچ گوشت',
    },
    
    {
      image: 'assets/crispy.jpg',
      title: 'ساندویچ مرغ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
