import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import {FormsModule} from '@angular/forms';

import {TiendaService} from './servicios/tienda.service';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu/ruta-menu.component';
import {RutaGestionarComponent} from './rutas/ruta-gestionar/ruta-gestionar.component';
import {ConductorService} from './servicios/tienda/conductor.service';
import {AutoService} from './servicios/tienda/auto.service';
import { CrearConductorComponent } from './rutas/ruta-gestionar/gestionar-conductor/crear-conductor/crear-conductor.component';
import { GestionarAutosComponent } from './rutas/ruta-gestionar/gestionar-autos/gestionar-autos/gestionar-autos.component';
import { CrearAutoComponent } from './rutas/ruta-gestionar/gestionar-autos/crear-auto/crear-auto.component';
import { RutaComprarComponent } from './rutas/ruta-comprar/ruta-comprar.component';
import {FacturaService} from "./servicios/factura/factura.service";
import { RutaRevisarComponent } from './rutas/ruta-revisar/ruta-revisar.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaMenuComponent,
    RutaGestionarComponent,
    CrearConductorComponent,
    GestionarAutosComponent,
    CrearAutoComponent,
    RutaComprarComponent,
    RutaRevisarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TiendaService,
    ConductorService,
    AutoService,
    FacturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
