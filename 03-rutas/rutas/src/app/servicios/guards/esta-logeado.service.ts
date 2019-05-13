import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService implements CanActivate {
  
  constructor( private readonly _authService: AuthService, private readonly _router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log('Probando');
    const estaLogeado = this._authService.estaLogeado;
    // return true; // no tener ninguna logica aqui, consultar de otro servicio el true o el false
    
    if (estaLogeado) {
      console.log('Bienvenido');
      return true;
    } else {
      console.log('You shall not pass');
      const url = ['/home', 'app'];
      this._router.navigate(url);
      return false;
    }
  
  }

}
