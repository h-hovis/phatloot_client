import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./features/home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [ProductComponent, RouterOutlet, NavbarComponent, HomeComponent, ProductListComponent]
})
export class AppComponent {
  title = 'phatloot_client';
}
