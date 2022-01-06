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
  ) {}
  cartItems = new BehaviorSubject<CartItemPopulated>(undefined);
  ngOnInit(): void {
    // this.customerCartService.loadCart().pipe(
    //   catchError((error) => {
    //     if (error instanceof HttpErrorResponse && error.status === 404) {
    //       return this.customerCartService.createCart(
    //         this.cartService.getCartList()
    //       );
    //     }
    //   }),
    //   tap((res) => {
    //     console.log(res);
    //   })
    // );

    const cart = { items: this.cartService.getCartList() };
    this.customerCartService.loadCart(cart).subscribe(
      (res) => {
        console.log(res);
        this.cartItems.next(res.items);
      },
      (err) => {
        console.log('here');
        if (err instanceof HttpErrorResponse && err.status === 404) {
          this.customerCartService.createCart(cart).subscribe((x) => {
            console.log('new cart generated');
          });
        }
      }
    );

    // catchError((error) => {
    //   if (error instanceof HttpErrorResponse && error.status === 404) {
    //     return this.createCart(cartItemList);
    //   }
    //   return of(undefined);
    // }),
  }
}
