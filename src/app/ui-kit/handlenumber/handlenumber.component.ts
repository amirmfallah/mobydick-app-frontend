import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handlenumber',
  templateUrl: './handlenumber.component.html',
  styleUrls: ['./handlenumber.component.scss']
})
export class HandlenumberComponent implements OnInit {
  number = 0;
  incCount() {
    this.number += 1;
  }
  decCount() {
    if (this.number > 0) this.number -= 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
