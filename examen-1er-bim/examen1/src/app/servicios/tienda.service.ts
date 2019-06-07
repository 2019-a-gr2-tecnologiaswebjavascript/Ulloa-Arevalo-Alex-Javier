import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth/auth.service";
import {Factura} from "../interfaces/factura";

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  nombreCajero: string;
  listaFactura: Factura[] = [];

  setNombreCajero(nombre: string) {
    this.nombreCajero = nombre.toString();
    console.log( 'Nombre desde el servicio', this.nombreCajero);

  }

  logarse() {
    console.log("en el login:", this.nombreCajero);
    this._authService.login(this.nombreCajero);
    const url = ['menu'];
    this._router.navigate(url);
  }

  guardarFactura(nuevaFactura: Factura){
    this.listaFactura.splice(0,0, nuevaFactura);
    console.log(this.listaFactura);
  }

  constructor(private readonly _router: Router,
              private readonly _authService: AuthService) {  }



}
