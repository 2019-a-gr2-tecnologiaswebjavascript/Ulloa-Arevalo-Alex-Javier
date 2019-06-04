import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaHomeComponent} from './rutas/ruta-home/ruta-home.component';
import {RutaMenuComponent} from './rutas/ruta-menu/ruta-menu/ruta-menu.component';
import {EstaLogeadoService} from './servicios/guards/esta-logeado.service';
import {RutaGestionarComponent} from './rutas/ruta-gestionar/ruta-gestionar.component';
import {CrearConductorComponent} from './rutas/ruta-gestionar/gestionar-conductor/crear-conductor/crear-conductor.component';
import {GestionarAutosComponent} from './rutas/ruta-gestionar/gestionar-autos/gestionar-autos/gestionar-autos.component';
import {CrearAutoComponent} from './rutas/ruta-gestionar/gestionar-autos/crear-auto/crear-auto.component';
import {RutaComprarComponent} from "./rutas/ruta-comprar/ruta-comprar.component";
import {RutaRevisarComponent} from "./rutas/ruta-revisar/ruta-revisar.component";

const routes: Routes = [
  {
    path: 'home/app',
    component: RutaHomeComponent
  },
  {
    path: 'menu',
    component: RutaMenuComponent,
    canActivate: [
      EstaLogeadoService
    ]
  },
  {
    path: 'menu/gestionar',
    component: RutaGestionarComponent,
    canActivate: [
      EstaLogeadoService
    ]
  },
  {
    path: 'menu/gestionar/conductor/crear',
    component: CrearConductorComponent,
    canActivate: [
      EstaLogeadoService
    ]
  },
  {
    path: 'menu/gestionar/auto',
    component: GestionarAutosComponent,
    canActivate: [
      EstaLogeadoService
    ]
  },
  {
    path: 'menu/comprar',
    component: RutaComprarComponent,
    canActivate: [
      EstaLogeadoService
    ]
  },
  {
    path: 'menu/revisar',
    component: RutaRevisarComponent,
    canActivate: [
      EstaLogeadoService
    ]
  },
  {
    path: 'menu/gestionar/auto/crear',
    component: CrearAutoComponent,
    canActivate: [
      EstaLogeadoService
    ]
  },
  {
    path: '',
    redirectTo: '/home/app',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home/app',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
