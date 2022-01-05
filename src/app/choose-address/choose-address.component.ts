import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-choose-address',
  templateUrl: './choose-address.component.html',
  styleUrls: ['./choose-address.component.scss'],
})
export class ChooseAddressComponent implements OnInit {
  @Input() addresses = ['رشت-گلسار', 'رشت-گلسار', 'رشت-گلسار', 'رشت-گلسار'];
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}
}
