import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite-item',
  templateUrl: './favourite-item.component.html',
  styleUrls: ['./favourite-item.component.scss'],
})
export class FavouriteItemComponent implements OnInit {
  @Input() id = '1';
  @Input() image = '';
  @Input() title = '';
  @Input() description = '';
  @Input() price = 0;
  number = 0;
  incCount() {
    this.number += 1;
  }
  decCount() {
    if (this.number > 0) this.number -= 1;
  }
  resetnum() {
    this.number = 0;
  }
  constructor() {}

  ngOnInit(): void {}
}
