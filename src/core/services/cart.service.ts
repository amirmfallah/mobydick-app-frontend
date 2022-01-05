import { CartItem } from './../interfaces/cart.interface';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: Array<CartItem> = [];
  constructor() {}

  addToCart(cartItem: CartItem): CartItem {
    if (Object.keys(cartItem).indexOf('_id') == -1) {
      cartItem._id = uuidv4();
    }
    this.cartItemList.push(cartItem);
    return cartItem;
  }

  getCartList(): Array<CartItem> {
    return this.cartItemList;
  }
}
