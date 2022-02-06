import { OrderDto } from './../interfaces/orders.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from 'src/core/configuration';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}
  loadOrder(cartId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('cart', cartId);

    return this.http.get(`${Configuration.MobydickApiUrl}/api/v1/orders/open`, {
      params: params,
    });
  }

  createOrder(order: OrderDto) {
    return this.http.post(
      `${Configuration.MobydickApiUrl}/api/v1/orders`,
      order
    );
  }

  updateOrder(order: OrderDto, cartId) {
    return this.http.patch(
      `${Configuration.MobydickApiUrl}/api/v1/orders/${cartId}`,
      order
    );
  }

  checkout(orderId: string) {
    return this.http.get(
      `${Configuration.MobydickApiUrl}/api/v1/orders/checkout/${orderId}`
    );
  }

  getAll() {
    return this.http.get(`${Configuration.MobydickApiUrl}/api/v1/orders/user`);
  }
}
