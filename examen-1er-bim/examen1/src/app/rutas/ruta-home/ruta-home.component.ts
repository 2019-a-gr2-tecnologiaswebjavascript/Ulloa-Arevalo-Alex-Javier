import { Component, OnInit } from '@angular/core';
import {TiendaService} from '../../servicios/tienda.service';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {
  ngOnInit() {
  }

  guardarUsuario(formulario) {
    console.log(formulario);

    const nombre = formulario.controls.nombre.value;
    console.log(nombre);

    this._tiendaService.setNombreCajero(nombre);
    this._tiendaService.logarse();

    }
  // tslint:disable-next-line:variable-name
  constructor(private readonly _tiendaService: TiendaService) {

  }
}
