import { Component, OnInit } from '@angular/core';
import { SearchpageService } from './services/searchpage.service';
import { categoryItem } from './shared/search.interface';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss'],
})
export class SearchpageComponent implements OnInit {
  searchitems: categoryItem[];
  constructor(private searchpageService: SearchpageService) {}

  ngOnInit(): void {
    this.searchpageService.getCategories().subscribe((res: categoryItem[]) => {
      this.searchitems = res;
    });
  }
}
