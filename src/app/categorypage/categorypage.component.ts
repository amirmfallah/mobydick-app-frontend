import { CategorypageService } from './services/categorypage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.scss'],
})
export class CategorypageComponent implements OnInit {
  items = [
    {
      image: 'assets/pizza-sub.jpg',
      title: 'پیتزا صاب',
      description: 'ژامبون، گوشت، پنیر',
      price: 40000,
    },
    {
      image: 'assets/chicken-salad.jpg',
      title: 'چیکن سالاد',
      description: 'چیکن، گوجه، خیار، پیاز',
      price: 20000,
    },
    {
      image: 'assets/pizza-sub.jpg',
      title: 'پیتزا صاب',
      description: 'ژامبون، گوشت، پنیر',
      price: 40000,
    },
    {
      image: 'assets/chicken-salad.jpg',
      title: 'چیکن سالاد',
      description: 'چیکن، گوجه، خیار، پیاز',
      price: 20000,
    },

    {
      image: 'assets/pizza-sub.jpg',
      title: 'پیتزا صاب',
      description: 'ژامبون، گوشت، پنیر',
      price: 40000,
    },
    {
      image: 'assets/chicken-salad.jpg',
      title: 'چیکن سالاد',
      description: 'چیکن، گوجه، خیار، پیاز',
      price: 20000,
    },
    {
      image: 'assets/pizza-sub.jpg',
      title: 'پیتزا صاب',
      description: 'ژامبون، گوشت، پنیر',
      price: 40000,
    },
    {
      image: 'assets/chicken-salad.jpg',
      title: 'چیکن سالاد',
      description: 'چیکن، گوجه، خیار، پیاز',
      price: 20000,
    },
  ];
  constructor(
    private categoryService: CategorypageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.categoryService.getProductsByCategory(id).subscribe((res) => {
      console.log(res);
    });
  }
}
