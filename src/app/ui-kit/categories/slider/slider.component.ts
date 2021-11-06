import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  posts = [
    {
      image: 'assets/burger.png',
      title: 'برگرها',
    },
    {
      image: 'assets/pizza.png',
      title: 'پیتزاها',
    },
    {
      image: 'assets/soup.png',
      title: 'سوپ‌ها',
    },
    {
      image: 'assets/soup.png',
      title: 'سوپ‌ها',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
