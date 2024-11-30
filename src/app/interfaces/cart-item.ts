import { Product } from "./product";

export interface CartItem {
  product: Product;
  amount: number;
}