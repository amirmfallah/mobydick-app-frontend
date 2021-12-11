import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-handlenumber',
  templateUrl: './handlenumber.component.html',
  styleUrls: ['./handlenumber.component.scss'],
})
export class HandlenumberComponent implements OnInit {
  @Input() number: number;
  incCount() {
    this.number += 1;
  }
  decCount() {
    if (this.number > 0) this.number -= 1;
  }
  constructor() {}

  ngOnInit(): void {
    if (!this.number) {
      this.number = 0;
    }
  }
}
