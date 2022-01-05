export interface CartItem {
  _id?: string;
  productId: string;
  sizeId: string;
  bread: string[];
  optional: string[];
  ingredients: string[];
  count: number;
}
