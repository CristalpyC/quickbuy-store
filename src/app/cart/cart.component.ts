import { Component } from '@angular/core';
import { CartCardComponent } from '../shared/product-elements/cart-card/cart-card.component';
import { OrderSummaryComponent } from '../shared/product-elements/order-summary/order-summary.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartCardComponent,
    OrderSummaryComponent
  ],
  templateUrl: './cart.component.html',
})
export default class CartComponent {
  title = 'Quickbuy - Cart'

}
