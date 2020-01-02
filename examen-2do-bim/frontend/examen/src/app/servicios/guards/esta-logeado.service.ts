import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {LoginService} from "../autenticacion/login.service";

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService implements CanActivate{

  constructor( private readonly _authService: LoginService, private readonly _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log('Probando');
    const estaLogeado = this._authService.estaLogeado;
    // return true; // no tener ninguna logica aqui, consultar de otro servicio el true o el false

    if (estaLogeado) {
      console.log('Bienvenido');
      return true;
    } else {
      console.log('holiii');
      const url = ['/autenticacion', 'login'];
      this._router.navigate(url);
      return false;
    }

  }


}
