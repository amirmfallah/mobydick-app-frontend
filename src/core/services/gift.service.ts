import { switchMap } from 'rxjs/operators';
import { Configuration } from 'src/core/configuration';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../interfaces/addresses.interface';
import { Gift } from '../interfaces/cart.interface';
import { CustomerCartService } from 'src/app/cart/services/customer-cart.service';

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  constructor(
    private http: HttpClient,
    private customerCartService: CustomerCartService
  ) {}

  applyGift(req: { code: string; cartId: string }): Observable<any> {
    let params = new HttpParams();
    params = params.append('code', req.code);

    return this.http
      .get(`${Configuration.MobydickApiUrl}/api/v1/gifts/verify`, {
        params: params,
      })
      .pipe(
        switchMap((gift: Gift) => {
          return this.customerCartService.patchCart(
            {
              giftId: gift._id,
            },
            req.cartId
          );
        })
      );
  }
}
