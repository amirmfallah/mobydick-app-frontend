import { tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  @Input() price: BehaviorSubject<number>;
  @Input() discountPercentage: number;
  pricebeforediscount = new BehaviorSubject<number>(0);
  after = new BehaviorSubject<number>(0);
  constructor() {}

  ngOnInit(): void {
    this.price
      .pipe(
        switchMap((x) => {
          if (this.discountPercentage) {
            this.pricebeforediscount.next(x);
            return of(x - x * (this.discountPercentage / 100));
          }
          return of(x);
        })
      )
      .subscribe((x) => {
        this.after.next(x);
      });
  }
}
