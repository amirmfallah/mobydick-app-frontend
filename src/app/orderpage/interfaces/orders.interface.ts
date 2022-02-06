import { Address } from 'src/app/ui-kit/branches-list/interfaces/branch.interfaces';
import {
  CartStatus,
  CartItemPopulated,
  CartDto,
} from './../../../core/interfaces/cart.interface';
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
  branchId?: { name: string };
  cartId?: CartDto;
  addressId?: Address;
  giftId?: string;
  total?: number;
  totalDiscount?: number;
  createdAt?: Date;
}

export enum CartStatusPersian {
  CANCELED = 'لغو شده',
  OPEN = 'باز',
  REGISTERED = 'ثبت شده',
  PREPARING = 'در حال آماده‌سازی',
  SENT = 'ارسال شده',
  DELIVERED = 'تحویل داده شده',
}
