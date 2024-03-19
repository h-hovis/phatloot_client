import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [ItemComponent, RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = 'phatloot_client';
}
