import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactions = [
    {
      name: 'موبی‌دیک گلسار',
      date: 14,
      month: 12,
      year: 1400,
      hour: 12,
      minute: 36,
      isSuccess: true,
      price: 27000,
    },
    {
      name: 'موبی‌دیک گلسار',
      date: 21,
      month: 12,
      year: 1400,
      hour: 14,
      minute: 46,
      isSuccess: false,
      price: 22000,
    },
    {
      name: 'موبی‌دیک گلسار',
      date: 14,
      month: 12,
      year: 1400,
      hour: 12,
      minute: 36,
      isSuccess: false,
      price: 27000,
    },
    {
      name: 'موبی‌دیک گلسار',
      date: 14,
      month: 12,
      year: 1400,
      hour: 12,
      minute: 36,
      isSuccess: true,
      price: 27000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
