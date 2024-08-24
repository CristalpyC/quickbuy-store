import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from '../shared/banner/banner.component';
import { FilterComponent } from '../shared/product-elements/filter/filter.component';
import { ProductCardsComponent } from '../shared/product-elements/product-cards/product-cards.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterOutlet, 
    BannerComponent, 
    FilterComponent,
    ProductCardsComponent
  ],
  templateUrl: './products.component.html',
})
export default class ProductsComponent {
  title = 'Quickbuy - Products';
}
