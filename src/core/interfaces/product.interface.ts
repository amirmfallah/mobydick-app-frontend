export interface Ingredients {
  _id: string;
  name: string;
  thumbnail?: string;
  price: number;
  available: boolean;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  thumbnail: string;
  price: number;
  discount: number;
  available: boolean;
  category: string;
  bread: Array<Ingredients>;
  ingredients: Array<Ingredients>;
  optional: Array<Ingredients>;
}

export interface Category {
  _id: string;
  name: string;
  thumbnail: string;
  products: Array<Product>;
}
