import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [ProductComponent, RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = 'phatloot_client';
}
