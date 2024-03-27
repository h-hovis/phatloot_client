import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  }

  getProductById(id:number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/${id}`);
  }

  createProduct(product: { name: string, category: string, price: number, description: string, imageUrl: string }): Observable<Product> {
    return this.http.post<Product>(environment.apiUrl, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.apiUrl}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${environment.apiUrl}/${id}`);
  }
}
