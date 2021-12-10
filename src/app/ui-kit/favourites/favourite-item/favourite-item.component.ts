import { Product } from './../../../../core/interfaces/product.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite-item',
  templateUrl: './favourite-item.component.html',
  styleUrls: ['./favourite-item.component.scss'],
})
export class FavouriteItemComponent implements OnInit {
  @Input() product: Product;

  count = 0;
  incCount() {
    this.count += 1;
  }
  decCount() {
    if (this.count > 0) this.count -= 1;
  }
  resetnum() {
    this.count = 0;
  }
  constructor() {}

  ngOnInit(): void {}
}
