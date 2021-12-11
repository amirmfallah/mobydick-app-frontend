import { Component, OnInit, Input } from '@angular/core';
import { ProductComponent } from 'src/app/product/product.component';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  @Input() items = [];
  constructor() {}

  ngOnInit(): void {}
}
