import { CartItem } from './../../../../core/interfaces/cart.interface';
import { BehaviorSubject } from 'rxjs';
import {
  Product,
  ProductUnpopulated,
} from './../../../../core/interfaces/product.interface';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-favourite-item',
  templateUrl: './favourite-item.component.html',
  styleUrls: ['./favourite-item.component.scss'],
})
export class FavouriteItemComponent implements OnInit {
  @Input() product: ProductUnpopulated;
  price: BehaviorSubject<number>;
  extra: number;
  count = 0;
  incCount() {
    this.count += 1;
  }
  decCount() {
    if (this.count > 0) this.count -= 1;
  }
  resetnum() {
    this.count = 0;
  }
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.price = new BehaviorSubject<number>(this.product.price[0].price);
  }

  addToCart() {
    console.log(this.product);
    const cartItem = <CartItem>{
      bread: this.product.bread.filter((x) => x.included).map((x) => x.item),
      ingredients: this.product.ingredients.map((x) => x.item),
      productId: this.product._id,
      optional: this.product.optional
        .filter((x) => x.included)
        .map((x) => x.item),
      option: this.product.price[0]._id,
      count: 0,
    };
    console.log(cartItem);
    this.cartService.addToCart(cartItem);
  }
}
