import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductListComponent } from 'src/app/product-list/product-list.component';
import { Product } from 'src/app/models/product';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ProductListComponent, NavbarComponent]
})
export class HomeComponent implements OnInit{
  homeProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.homeProducts = products;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

}
