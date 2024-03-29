import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input({ required: true }) products: Product[] = [];
}
