import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./autenticacion/login/login.component";
import {ConductorComponent} from "./administracion/conductor/conductor.component";
import {AutoComponent} from "./administracion/auto/auto.component";
import {CrearAutoComponent} from "./administracion/auto/crear-auto/crear-auto.component";
import {EstaLogeadoService} from "./servicios/guards/esta-logeado.service";

const routes: Routes = [
  {
    path: 'autenticacion/login',
    component: LoginComponent,
  },
  {
    path: 'administracion/conductor',
    component: ConductorComponent,
    canActivate: [EstaLogeadoService],
  },
  {
    path: 'administracion/auto',
    component: AutoComponent,
    canActivate: [EstaLogeadoService],
  },
  {
    path: 'administracion/auto/crear',
    component: CrearAutoComponent,
    canActivate: [EstaLogeadoService],
  },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
