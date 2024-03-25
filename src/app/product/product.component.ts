import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  products: Product[] = [];
  newProduct: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      this.productService.getProducts().subscribe(product => this.products = product);
  }

  addProduct() {
    const product = {
      name: '',
      category: '',
      price: 0,
      description: '',
      imageUrl: ''
    };

    this.productService.createProduct(product).subscribe(newProduct => {
      this.products.push(newProduct);
      this.newProduct = '';
    });
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe(updatedProduct => {
      const index = this.products.findIndex(i => i.id === updatedProduct.id);
      this.products[index] = updatedProduct;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: () => this.products = this.products.filter(product => product.id !== id),
      error: (err) => console.error(err)
    });
  }
}
