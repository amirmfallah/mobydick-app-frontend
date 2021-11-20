import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-choose-address',
  templateUrl: './choose-address.component.html',
  styleUrls: ['./choose-address.component.scss'],
})
export class ChooseAddressComponent implements OnInit {
  pedarsag="pedarsag";
  @Input() addresses: [
    {
      'نیشابور-خونه علی';
    },
    { 'رشت-خیابون 174 ارکیده' },
    { 'رشت-خیابون 174 ارکیده' }
  ];
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}
}
