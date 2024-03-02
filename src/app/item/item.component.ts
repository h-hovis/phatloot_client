import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{
  items: Item[] = [];
  newItem: string = '';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
      this.itemService.getItems().subscribe(items => this.items = items);
  }

  addItem() {
    const item = {
      name: '',
      category: '',
      price: 0,
      description: '',
      imageUrl: ''
    };

    this.itemService.createItem(item).subscribe(newItem => {
      this.items.push(newItem);
      this.newItem = '';
    });
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item).subscribe(updatedItem => {
      const index = this.items.findIndex(i => i.id === updatedItem.id);
      this.items[index] = updatedItem;
    });
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe({
      next: () => this.items = this.items.filter(item => item.id !== id),
      error: (err) => console.error(err)
    });
  }
}
