import { searchResponse } from './../../core/interfaces/shared.interface';
import {
  Category,
  CategoryUnpopulated,
  Product,
  ProductUnpopulated,
} from './../../core/interfaces/product.interface';
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
  products: Array<ProductUnpopulated> = undefined;
  categories: Array<CategoryUnpopulated>;
  id: string;
  constructor(
    private categoryService: CategorypageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.products = undefined;
      this.id = params['id'];
      this.categoryService
        .getProductsByCategory(this.id)
        .subscribe((res: CategoryUnpopulated) => {
          this.categoryName = res.name;
          this.products = res.products;
          console.log(this.products);
        });

      this.categoryService
        .getCategories()
        .subscribe((res: searchResponse<CategoryUnpopulated>) => {
          this.categories = res.items;
        });
    });
  }
}
