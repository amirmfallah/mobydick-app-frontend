import { HttpErrorResponse } from '@angular/common/http';
import { NewAddressComponent } from './../new-address/new-address.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { GiftService } from 'src/core/services/gift.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-bottom-tab-discount',
  templateUrl: './bottom-tab-discount.component.html',
  styleUrls: ['./bottom-tab-discount.component.scss'],
})
export class BottomTabDiscountComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private giftService: GiftService,
    private _bottomSheetRef: MatBottomSheetRef<NewAddressComponent>
  ) {
    this.form = this.fb.group({
      code: ['', Validators.required],
    });
  }
  form: FormGroup;
  $error = new BehaviorSubject<string>('');
  ngOnInit(): void {}

  submit() {
    if (!this.form.valid) {
      return;
    }

    this.form.disable();
    this.giftService.applyGift(this.form.value).subscribe(
      (res) => {
        this.form.enable();
        this._bottomSheetRef.dismiss(res);
        event.preventDefault();
      },
      (err) => {
        this.form.enable();
        console.log('error');
        console.log(err);
        if (err instanceof HttpErrorResponse && err.status === 404) {
          this.form.controls['code'].setErrors({});
          this.$error.next('کد تخفیف معتبر نمی‌باشد.');
        } else {
          this.$error.next('خطایی پیش آمده است.');
        }
      }
    );
  }
}
