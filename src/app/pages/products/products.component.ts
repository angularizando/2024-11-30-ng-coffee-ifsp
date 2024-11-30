import { Component, inject, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);

  products = this.productsService.products;
  isLoading = this.productsService.isLoading;

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
