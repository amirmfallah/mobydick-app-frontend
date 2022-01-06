import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-addresses',
  templateUrl: './profile-addresses.component.html',
  styleUrls: ['./profile-addresses.component.scss'],
})
export class ProfileAddressesComponent implements OnInit {
  addresses = [
    { address: 'رشت-خیابان نامجو' },
    {
      address:
        ' مشهد-خیابان فردوسمشهد-خیابان فردوسمشهد-خیابان فردوسمشهد-خیابان فردوسمشهد-خیابان فردوسمشهد-خیابان فردوسمشهد-خیابان فردوسی',
    },
    {address:"رشت-خیابان نامجو"},
    {address:"رشت-خیابان نامجو"},
    {address:"رشت-خیابان نامجو"},
    {address:"رشت-خیابان نامجو"},
    {address:"رشت-خیابان نامجو"},
    {address:"رشت-خیابان نامجو"},
    {address:"رشت-خیابان نامجو"},
    {address:"رشت-خیابان نامجو"},
    {address:"رشت-خیابان نامجو"},{address:"رشت-خیابان نامجو"},
    {address:"رشت-خیابان نامجو"},
  ];
  constructor() {}

  ngOnInit(): void {}
}
