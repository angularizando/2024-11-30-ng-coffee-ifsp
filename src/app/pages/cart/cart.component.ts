import { Component, inject, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CardComponent, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private cartService = inject(CartService);
  cartItems = this.cartService.cartItems;
  totalCartItems = this.cartService.totalCartItems;
  address = '';

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  saveOrder() {
    this.cartService.saveOrder(this.address);
  }
}
