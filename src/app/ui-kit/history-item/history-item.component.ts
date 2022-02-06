import {
  OrderExistingDto,
  CartStatusPersian,
} from './../../orderpage/interfaces/orders.interface';
import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as persianDate from 'persian-date';
@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
})
export class HistoryItemComponent implements OnInit {
  date: string;
  time: string;
  constructor() {}

  @Input() order: OrderExistingDto;
  cartStatusPersian = CartStatusPersian;
  ngOnInit(): void {
    this.date = new persianDate(this.order.createdAt).format('YYYY/M/D');
    this.time = new persianDate(this.order.createdAt).format('HH:mm');
  }
  getAmount() {
    return _.get(this.order, 'payment.amount');
  }
}
