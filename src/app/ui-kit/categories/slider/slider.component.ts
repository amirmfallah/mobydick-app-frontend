import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categoryItem } from 'src/app/searchpage/shared/search.interface';
import { CategoriesService } from './../services/categories.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  categoryName: string;
  thumbnail: string;
  Categories: categoryItem[];
  constructor(
    private categoryService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res: categoryItem[]) => {
      this.Categories = res;
    });
  }
}
