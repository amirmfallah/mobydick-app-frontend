import { IngredientItem, Ingredients, Product } from './product.interface';

export interface CartItem {
  productId: string;
  bread: string[];
  optional: string[];
  ingredients: string[];
  option: string;
  count: number;
}

export interface CartItemPopulated {
  productId: Product;
  bread: Array<Ingredients>;
  optional: Array<Ingredients>;
  ingredients: Array<Ingredients>;
  option: string;
  count: number;
  calculatedPrice: number;
}

export interface CartDto {
  _id: string;
  ownerId: string;
  status: number;
  items: CartItemPopulated[];
  total: number;
  totalDiscount: number;
}
