import { CartService } from './../../core/services/cart.service';
import { CartItem } from './../../core/interfaces/cart.interface';
import { Ingredients } from './../../core/interfaces/product.interface';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/core/interfaces/product.interface';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  panelOpenState = false;
  count: number = 0;
  product = new BehaviorSubject<Product>(undefined);
  price = new BehaviorSubject<number>(undefined);
  form: FormGroup;
  cartItemId: string = undefined;

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
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe((res: Product) => {
      this.product.next(res);
      this.price.next(res.price[0].price);

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
    });
  }

  placeOrder(): void {
    console.log('place order');
    let cartItem = <CartItem>this.form.value;
    cartItem.productId = this.product.getValue()._id;
    cartItem.count = this.count;
    this.cartService.addToCart(cartItem);
    console.log(this.cartService.getCartList());
  }

  onCheckboxChange(e, field) {
    const checkArray: FormArray = this.form.get(field) as FormArray;
    console.log(e);
    if (e.checked) {
      checkArray.push(new FormControl(e.source.value));
      if (field === 'optional') {
        let product = this.product.getValue();
        let price = this.price.getValue();
        product.optional.forEach((option) => {
          if (option.item._id === e.source.value) {
            price += option.item.price;
            return;
          }
        });
        this.price.next(price);
      }
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.source.value) {
          checkArray.removeAt(i);
          if (field === 'optional') {
            let product = this.product.getValue();
            let price = this.price.getValue();
            product.optional.forEach((option) => {
              if (option.item._id === e.source.value) {
                price -= option.item.price;
              }
            });
            this.price.next(price);
          }
          return;
        }
        i++;
      });
    }
  }

  onRadioChange(e) {
    console.log(e);
    const radioArray: FormArray = this.form.get('bread') as FormArray;
    radioArray.clear();
    radioArray.push(new FormControl(e.value));
  }

  optionChange(e) {
    this.product.getValue().price.forEach((option) => {
      if (option._id === e.value) {
        this.price.next(option.price);
        this.form.get('option').setValue(option._id);
      }
    });
  }
}
