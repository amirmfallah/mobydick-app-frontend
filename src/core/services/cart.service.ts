import { CartItem } from './../interfaces/cart.interface';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: Array<CartItem> = [];
  constructor() {}

  addToCart(cartItem: CartItem): CartItem {
    for (let i = 0; i < this.cartItemList.length; i++) {
      if (this.isSameCartItem(cartItem, this.cartItemList[i])) {
        this.cartItemList[i].count++;
        return this.cartItemList[i];
      }
    }
    cartItem.count = 1;
    this.cartItemList.push(cartItem);
    return cartItem;
  }

  removeFromCart(cartItem: CartItem): number {
    for (let i = 0; i < this.cartItemList.length; i++) {
      if (this.isSameCartItem(cartItem, this.cartItemList[i])) {
        this.cartItemList[i].count--;
        if (this.cartItemList[i].count == 0) {
          this.cartItemList.splice(i, 1);
          return 0;
        }
        return this.cartItemList[i].count;
      }
    }
  }

  getCartList(): Array<CartItem> {
    return this.cartItemList;
  }

  getItemCount(item: CartItem) {
    for (let i = 0; i < this.cartItemList.length; i++) {
      if (this.isSameCartItem(item, this.cartItemList[i])) {
        return this.cartItemList[i].count;
      }
    }
  }

  isSameCartItem(x: CartItem, y: CartItem) {
    const x1 = {
      bread: x.bread,
      ingredients: x.ingredients,
      optional: x.optional,
      option: x.option,
      productId: x.productId,
    };

    const y1 = {
      bread: y.bread,
      ingredients: y.ingredients,
      optional: y.optional,
      option: y.option,
      productId: y.productId,
    };
    return _.isEqual(x1, y1);
  }

  getCountItem(cartItem: CartItem): number {
    for (let i = 0; i < this.cartItemList.length; i++) {
      if (this.isSameCartItem(cartItem, this.cartItemList[i])) {
        return this.cartItemList[i].count;
      }
    }
    return 0;
  }
}
