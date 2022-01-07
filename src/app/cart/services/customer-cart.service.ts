import { catchError, tap, switchMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Configuration } from 'src/core/configuration';
import { CartItem } from './../../../core/interfaces/cart.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerCart } from '../interfaces/customer-cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerCartService {
  constructor(private http: HttpClient) {}
  loadCart(cartItemList): Observable<any> {
    return this.http
      .get(`${Configuration.MobydickApiUrl}/api/v1/carts/open`)
      .pipe(
        switchMap((res: CustomerCart) => {
          return this.patchCart(cartItemList, res._id);
        })
      );
  }
  getOpenCart(): Observable<any> {
    return this.http.get(`${Configuration.MobydickApiUrl}/api/v1/carts/open`);
  }
  patchCart(cartItemList, cartId: string) {
    return this.http.patch(
      `${Configuration.MobydickApiUrl}/api/v1/carts/${cartId}`,
      cartItemList
    );
  }
  createCart(cartItemList): Observable<any> {
    return this.http.post(
      `${Configuration.MobydickApiUrl}/api/v1/carts`,
      cartItemList
    );
  }
}
