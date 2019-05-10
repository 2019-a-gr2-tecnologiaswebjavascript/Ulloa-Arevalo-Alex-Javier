import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorSuperiorComponent } from './contenedor-superior/contenedor-superior.component';
import { ContenedorProductoComponent } from './contenedor-producto/contenedor-producto.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorSuperiorComponent,
    ContenedorProductoComponent,
    ItemMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
