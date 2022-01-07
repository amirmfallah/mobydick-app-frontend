import { BehaviorSubject } from 'rxjs';
import { CartService } from './../../../core/services/cart.service';
import {
  CartItem,
  CartItemPopulated,
} from './../../../core/interfaces/cart.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  constructor(private cartService: CartService) {}
  detail: string = '';
  @Input() item: CartItemPopulated;
  @Input() changed: BehaviorSubject<any>;
  price: BehaviorSubject<number>;

  ngOnInit(): void {
    this.price = new BehaviorSubject<any>(
      this.item.calculatedPrice * this.item.count
    );
    this.item.bread.forEach((i) => {
      this.detail += i.name + ' ،';
    });
    this.item.ingredients.forEach((i) => {
      this.detail += i.name + ' ،';
    });
    this.item.optional.forEach((i) => {
      this.detail += i.name + ' ،';
    });
  }

  addOrder(): void {
    let cartItem = <CartItem>this.getCartItem(this.item);
    console.log(cartItem);
    const added = this.cartService.addToCart(cartItem);
    this.item.count = added.count;
    console.log(this.cartService.getCartList());
    this.changed.next('');
  }

  removeOrder(): void {
    if (this.item.count <= 0) {
      return;
    }
    let cartItem = <CartItem>this.getCartItem(this.item);
    const removed = this.cartService.removeFromCart(cartItem);
    this.item.count = removed;
    this.changed.next('');
  }

  getCartItem(item: CartItemPopulated): CartItem {
    return <CartItem>{
      bread: item.bread.map((x) => x._id),
      ingredients: item.ingredients.map((x) => x._id),
      productId: item.productId._id,
      optional: item.optional.map((x) => x._id),
      option: item.option,
    };
  }
}
