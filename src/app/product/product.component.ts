import { CartService } from './../../core/services/cart.service';
import { CartItem } from './../../core/interfaces/cart.interface';
import {
  Ingredients,
  priceItem,
} from './../../core/interfaces/product.interface';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, from, of, Subject } from 'rxjs';
import { Product } from 'src/core/interfaces/product.interface';
import { ProductService } from './services/product.service';
import { first, tap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  panelOpenState = false;
  count = new BehaviorSubject<number>(0);
  product = new BehaviorSubject<Product>(undefined);
  price = new Subject<number>();
  form: FormGroup;
  selectedOption: string = '';
  $updatedPrice = new BehaviorSubject<number>(0);
  basePrice: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cartService: CartService
  ) {
    this.form = this.fb.group({
      bread: this.fb.array([]),
      optional: this.fb.array([]),
      ingredients: this.fb.array([]),
      option: [],
    });
  }

  ngOnInit(): void {
    this.price
      .pipe(
        switchMap(() => {
          let extra = 0;

          let checkArray: FormArray = this.form.get('bread') as FormArray;
          for (let i = 0; i < checkArray.value.length; i++) {
            const element = checkArray.value[i];
            extra += this.product
              .getValue()
              .bread.find((x) => x.item._id == element).item.price;
          }

          checkArray = this.form.get('optional') as FormArray;
          for (let i = 0; i < checkArray.value.length; i++) {
            const element = checkArray.value[i];
            extra += this.product.value.optional.find(
              (x) => x.item._id == element
            ).item.price;
          }

          return of(this.basePrice + extra);
        })
      )
      .subscribe((x) => this.$updatedPrice.next(x));

    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe((res: Product) => {
      this.product.next(res);

      const breads: FormArray = this.form.get('bread') as FormArray;
      res.bread.forEach((bread) => {
        if (bread.included) {
          breads.push(new FormControl(bread.item._id));
        }
      });

      const ingredients: FormArray = this.form.get('ingredients') as FormArray;
      res.ingredients.forEach((ingredient) => {
        if (ingredient.included) {
          ingredients.push(new FormControl(ingredient.item._id));
        }
      });

      const optional: FormArray = this.form.get('optional') as FormArray;
      res.optional.forEach((option) => {
        if (option.included) {
          optional.push(new FormControl(option.item._id));
        }
      });

      from(res.price)
        .pipe(first())
        .subscribe((x) => {
          this.selectedOption = x._id;
          this.optionChange({ value: x._id });
        });
      //this.$updatePrice.next();
      this.count.next(this.getCartItemCount());
    });

    this.form.valueChanges.subscribe((x) => {
      let cartItem = <CartItem>this.form.value;
      cartItem.productId = this.product.value._id;
      this.count.next(this.cartService.getCountItem(cartItem));
    });
  }

  getCartItemCount(): number {
    let cartItem = <CartItem>this.form.value;
    cartItem.productId = this.product.value._id;
    return this.cartService.getCountItem(cartItem);
  }

  addOrder(): void {
    let cartItem = <CartItem>this.form.value;
    cartItem.productId = this.product.value._id;
    cartItem.count = this.count.value;
    const added = this.cartService.addToCart(cartItem);
    this.count.next(added.count);
  }

  removeOrder(): void {
    if (this.count.value <= 0) {
      return;
    }
    let cartItem = <CartItem>this.form.value;
    cartItem.productId = this.product.value._id;
    cartItem.count = this.count.value;
    const removed = this.cartService.removeFromCart(cartItem);
    this.count.next(removed);
  }

  onCheckboxChange(e, field) {
    const checkArray: FormArray = this.form.get(field) as FormArray;
    if (e.checked) {
      checkArray.push(new FormControl(e.source.value));
    } else {
      checkArray.removeAt(
        checkArray.controls.findIndex((x) => x.value == e.source.value)
      );
    }
    this.price.next();
  }

  onRadioChange(e) {
    const radioArray: FormArray = this.form.get('bread') as FormArray;
    radioArray.clear();
    radioArray.push(new FormControl(e.value));
    this.price.next();
  }

  optionChange(e) {
    let cartItem = <CartItem>this.form.value;
    cartItem.productId = this.product.value._id;
    this.count.next(this.cartService.getCountItem(cartItem));
    const option = this.product.value.price.find(
      (option) => option._id == e.value
    );
    this.basePrice = option.price;
    this.price.next();
    this.form.get('option').setValue(option._id);
  }
}
