import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // imports: [ItemComponent],
})
export class AppComponent {
  title = 'phatloot_client';
}
