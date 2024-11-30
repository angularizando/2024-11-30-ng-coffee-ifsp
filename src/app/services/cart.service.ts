import { computed, inject, Injectable, signal } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private httpClient = inject(HttpClient);
  private cartItemsState = signal<CartItem[]>([]);
  cartItems = this.cartItemsState.asReadonly();
  totalCartItems = computed(() => this.cartItems().reduce((sum, item) => sum + item.amount, 0))

  addToCart(product: Product) {
    const items = this.cartItems();
    const itemIndex = items.findIndex(item => item.product.name === product.name);
    if (itemIndex < 0) {
      items.push({ product, amount: 1 });
    } else {
      items[itemIndex].amount += 1;
    }

    this.cartItemsState.set([...items]);
  }

  removeFromCart(product: Product) {
    const items = this.cartItemsState();
    const itemIndex = items.findIndex(item => item.product.name === product.name);
    if (items[itemIndex].amount > 1) {
      items[itemIndex].amount -= 1;
    } else {
      items.splice(itemIndex, 1);
    }

    this.cartItemsState.set([...items]);
  }

  saveOrder(address: string) {
    this.httpClient.post('http://localhost:3000/orders', { address, cartItems: this.cartItems()}).subscribe(() => {
      console.log('deu bom pra gravar');
    })
  }
}


