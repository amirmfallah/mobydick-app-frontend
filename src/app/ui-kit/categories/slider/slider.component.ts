import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  posts = [
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
      image: 'assets/chicken-salad.jpg',
      title: 'ساندویچ سبزیجات',
    },
    {
      image: 'assets/crispy.jpg',
      title: 'ساندویچ مرغ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
