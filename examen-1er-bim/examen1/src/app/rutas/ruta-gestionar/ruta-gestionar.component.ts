import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ConductorService} from "../../servicios/tienda/conductor.service";
import {Conductor} from "../../interfaces/conductor";
import {AutoService} from "../../servicios/tienda/auto.service";

@Component({
  selector: 'app-ruta-gestionar',
  templateUrl: './ruta-gestionar.component.html',
  styleUrls: ['./ruta-gestionar.component.css']
})
export class RutaGestionarComponent implements OnInit {

  listaConductoresMostrar: Conductor[] = this._conductorService.listaConductores;

  constructor( private readonly _router: Router,
               private readonly _conductorService: ConductorService,
               private readonly _autoService: AutoService,
              ) { }

  ngOnInit() {
  }

  buscar() {

    console.log(this.busqueda);

    if(this.busqueda == "" || this.busqueda == undefined){
      console.log('bien');
      this.listaConductoresMostrar = this._conductorService.listaConductores;
    }
    else {
      this.listaConductoresMostrar = this._conductorService.listaConductores.filter(
        conductor => conductor.nombre === this.busqueda
      );
    }

  }

  crear() {

    console.log('crear');
    const url = ['menu', 'gestionar', 'conductor', 'crear'];
    this._router.navigate(url);


  }

  elimarConductor(conductorId: number) {

    this._conductorService.listaConductores = this._conductorService.listaConductores.filter(
      conductor => conductor.conductorId !== conductorId
    );
    this._autoService.eliminarConductor(conductorId);
    this.listaConductoresMostrar = this._conductorService.listaConductores;

  }

  administrarProducto(conductorId: number) {

    const url = ['menu', 'gestionar', 'auto'];
    const parametros = {
      queryParams: {
        conductorId: conductorId
      }

    }
    this._router.navigate(url, parametros);


  }

  volver() {
    const url = ['menu'];
    this._router.navigate(url);
  }
}
