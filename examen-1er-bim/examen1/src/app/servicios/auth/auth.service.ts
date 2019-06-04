import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogeado = false;

  // tslint:disable-next-line:variable-name
  constructor( private readonly _router: Router ) { }

  login(nombre: string) {

    console.log(nombre);

    if (nombre.length > 0 ) {
      this.estaLogeado = true;
    }
  }

}
