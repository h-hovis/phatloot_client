import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }

  getItemById(id:number): Observable<Item> {
    return this.http.get<Item>(`${this.url}/${id}`);
  }

  createItem(item: { name: string, category: string, price: number, description: string, imageUrl: string }): Observable<Item> {
    return this.http.post<Item>(this.url, item);
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.url}/${item.id}`, item);
  }

  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(`${this.url}/${id}`);
  }
}
