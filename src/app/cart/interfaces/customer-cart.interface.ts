import { CartItemPopulated } from './../../../core/interfaces/cart.interface';
import { CartItem } from 'src/core/interfaces/cart.interface';

export interface CustomerCart {
  _id: string;
  total: number;
  ownerId: string;
  items: CartItemPopulated[];
  status: Number;
}
