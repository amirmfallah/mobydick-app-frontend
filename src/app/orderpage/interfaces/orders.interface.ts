import { Address } from 'src/app/ui-kit/branches-list/interfaces/branch.interfaces';
import { CartStatus } from './../../../core/interfaces/cart.interface';
export interface OrderDto {
  status?: CartStatus;
  branchId?: string;
  cartId?: string;
  addressId?: string;
  giftId?: string;
}

export interface OrderExistingDto {
  _id?: string;
  status?: CartStatus;
  branchId?: string;
  cartId?: string;
  addressId?: Address;
  giftId?: string;
  total?: number;
  totalDiscount?: number;
}
