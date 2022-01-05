export interface Ingredients {
  _id: string;
  name: string;
  thumbnail?: string;
  price: number;
  available: boolean;
}

export interface IngredientItem {
  item: Ingredients;
  required: boolean;
  included: boolean;
}

export interface priceItem {
  _id: string;
  optionName: string;
  avaiable: string;
  price: number;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  thumbnail: string;
  price: Array<priceItem>;
  discount: number;
  available: boolean;
  category: string;
  bread: Array<IngredientItem>;
  ingredients: Array<IngredientItem>;
  optional: Array<IngredientItem>;
}

export interface Category {
  _id: string;
  name: string;
  thumbnail: string;
  products: Array<Product>;
}
