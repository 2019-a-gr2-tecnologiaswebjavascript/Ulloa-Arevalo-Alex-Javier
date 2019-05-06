import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { CarritoService } from './servicios/carrito/carrito.service';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';

@NgModule({
  declarations: [ //componentes
    AppComponent,
    ItemGaleriaComponent,
    MostrarCarritoComponent
  ],
  imports: [ // Otros Modulos
    BrowserModule //Directivas
  ],
  providers: [ //servicios
    CarritoService
  ],
  exports: [
    ItemGaleriaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
