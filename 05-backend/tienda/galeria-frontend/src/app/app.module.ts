import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CarritoHttpService} from "./servicios/http/carrito-http.service";
import {ProductoHttpService} from "./servicios/http/producto-http.service";
import {TiendaHttpService} from "./servicios/http/tienda-http.service";
import {TiendaProductoHttpService} from "./servicios/http/tienda-producto-http.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CarritoHttpService,
    ProductoHttpService,
    TiendaHttpService,
    TiendaProductoHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
