import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  sliderinfo=[
    {
      image: 'assets/chicago.jpg',
    },
    {
      image: 'assets/dayaneese.jpg',
    },
    {
      image: 'assets/caesar.jpg',
    },
  ]
  constructor() {}
  @ViewChild('ngcarousel') ngCarousel: NgbCarousel;

  ngOnInit(): void {}

  // Move to specific slide
  navigateToSlide(item) {
    this.ngCarousel.select(item);
    console.log(item);
  }

  // Move to previous slide
  getToPrev() {
    this.ngCarousel.prev();
  }

  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
  }

  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }

  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }
}
