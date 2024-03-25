import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { ProductComponent } from "./product/product.component";

@NgModule({
    declarations: [
        // AppComponent
    ],
    providers: [],
    bootstrap: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProductComponent
    ]
})
export class AppModule { }
