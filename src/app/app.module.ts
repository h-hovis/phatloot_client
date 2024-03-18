import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from "./item/item.component";

@NgModule({
    declarations: [
        // AppComponent
    ],
    providers: [],
    bootstrap: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ItemComponent
    ]
})
export class AppModule { }
