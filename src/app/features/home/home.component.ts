import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductListComponent } from 'src/app/product-list/product-list.component';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  homeProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        console.log(products);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

}
