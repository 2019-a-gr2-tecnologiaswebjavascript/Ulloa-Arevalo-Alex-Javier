import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaProductosHogarComponent } from './rutas/ruta-productos-hogar/ruta-productos-hogar.component';
import { RutaProductosVideojuegosComponent } from './rutas/ruta-productos-videojuegos/ruta-productos-videojuegos.component';
import { RutaShooterComponent } from './rutas/ruta-shooter/ruta-shooter.component';
import { RutaRpgComponent } from './rutas/ruta-rpg/ruta-rpg.component';
import { RutaMobaComponent } from './rutas/ruta-moba/ruta-moba.component';
import { RutaProductoVideojuegoShooterComponent } from './rutas/ruta-producto-videojuego-shooter/ruta-producto-videojuego-shooter.component';
import { RutaProductoVideojuegoMobaComponent } from './rutas/ruta-producto-videojuego-moba/ruta-producto-videojuego-moba.component';
import { RutaProductoVideojuegoRpgComponent } from './rutas/ruta-producto-videojuego-rpg/ruta-producto-videojuego-rpg.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaCreditosComponent,
    RutaProductosComponent,
    RutaNoEncontradaComponent,
    RutaProductosHogarComponent,
    RutaProductosVideojuegosComponent,
    RutaShooterComponent,
    RutaRpgComponent,
    RutaMobaComponent,
    RutaProductoVideojuegoShooterComponent,
    RutaProductoVideojuegoMobaComponent,
    RutaProductoVideojuegoRpgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
