import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() title = '';
  @Input() image = '';
  @Input() id: string;
  load: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  imageLoad(e) {
    this.load = true;
  }
}
