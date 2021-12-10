import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss'],
})
export class SliderItemComponent implements OnInit {
  @Input() thumbnail = '';
  @Input() name = '';
  @Input() id;
  constructor() {}

  ngOnInit(): void {}
}
