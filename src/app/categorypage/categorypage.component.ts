import { Category, Product } from './../../core/interfaces/product.interface';
import { CategorypageService } from './services/categorypage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.scss'],
})
export class CategorypageComponent implements OnInit {
  categoryName: string;
  products: Array<Product>;
  constructor(
    private categoryService: CategorypageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.categoryService
      .getProductsByCategory(id)
      .subscribe((res: Category) => {
        this.categoryName = res.name;
        this.products = res.products;
        console.log(this.products);
      });
  }
}
