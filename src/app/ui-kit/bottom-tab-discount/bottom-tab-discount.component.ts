import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-tab-discount',
  templateUrl: './bottom-tab-discount.component.html',
  styleUrls: ['./bottom-tab-discount.component.scss'],
})
export class BottomTabDiscountComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      code: [],
    });
  }
}
