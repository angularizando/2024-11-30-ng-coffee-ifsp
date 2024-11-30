import { Component, input, output } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<Product>();
  amount = input<number>();
  label = input<string>('Add to cart');
  select = output();

  handleClick() {
    this.select.emit();
  }
}
