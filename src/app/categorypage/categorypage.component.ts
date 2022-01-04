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
  products: Array<Product> = undefined;
  categories: Array<Category>;
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
        .subscribe((res: Category) => {
          this.categoryName = res.name;
          this.products = res.products;
          console.log(this.products);
        });

      this.categoryService.getCategories().subscribe((res: Array<Category>) => {
        this.categories = res;
      });
    });
  }
}
