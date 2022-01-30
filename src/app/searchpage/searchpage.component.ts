import { CategoriesService } from './../ui-kit/categories/services/categories.service';
import { searchResponse } from './../../core/interfaces/shared.interface';
import { Component, OnInit } from '@angular/core';
import { categoryItem } from './shared/search.interface';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss'],
})
export class SearchpageComponent implements OnInit {
  searchitems: categoryItem[];
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((res: searchResponse<categoryItem>) => {
        this.searchitems = res.items;
      });
  }
}
