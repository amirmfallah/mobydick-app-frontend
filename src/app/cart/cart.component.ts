import { CartDto } from './../../core/interfaces/cart.interface';
import { first } from 'lodash';
import { tap, catchError } from 'rxjs/operators';
import { CustomerCartService } from './services/customer-cart.service';
import { CartService } from './../../core/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CartItemPopulated } from 'src/core/interfaces/cart.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private customerCartService: CustomerCartService,
    private cartService: CartService
  ) {
    this.fetch.subscribe(() => {
      console.log('trigred');
      this.cartItems.next(undefined);
      const cart = { items: this.cartService.getCartList() };
      this.customerCartService.loadCart(cart).subscribe(
        (res: CartDto) => {
          this.cartItems.next(res.items);
        },
        (err) => {
          console.log('here');
          if (err instanceof HttpErrorResponse && err.status === 404) {
            this.customerCartService
              .createCart(cart)
              .subscribe((res: CartDto) => {
                this.cartItems.next(res.items);
              });
          }
        }
      );
    });
  }
  cartItems = new BehaviorSubject<CartItemPopulated[]>(undefined);
  fetch = new BehaviorSubject<any>(undefined);

  ngOnInit(): void {}
}
