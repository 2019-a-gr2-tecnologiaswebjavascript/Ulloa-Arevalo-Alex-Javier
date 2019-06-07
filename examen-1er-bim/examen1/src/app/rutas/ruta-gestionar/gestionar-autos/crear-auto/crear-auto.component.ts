import { Component, OnInit } from '@angular/core';
import {AutoService} from "../../../../servicios/tienda/auto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Auto} from "../../../../interfaces/auto";

@Component({
  selector: 'app-crear-auto',
  templateUrl: './crear-auto.component.html',
  styleUrls: ['./crear-auto.component.css']
})
export class CrearAutoComponent implements OnInit {

  conductorId: number;

  constructor( private  readonly _autoService:AutoService,
               private readonly _activatedRouter: ActivatedRoute,
               private  readonly  _router: Router) { }

  ngOnInit() {
    //$ -> para indicar que es un observable
    const parametrosConsulta$ = this._activatedRouter.queryParams;

    parametrosConsulta$.subscribe(
      (parametrosConsulta)=> {
        console.log('Parametros consulta: ', parametrosConsulta);
        this.conductorId = parametrosConsulta.conductorId;
      }
    );


  }

  guardarAuto(formulario) {

    console.log(formulario);

    if(!formulario.valid){
      alert('Algo te falta!! (puede ser el color)');
    }
    else{
      const nuevoAuto: Auto = {
        anio: formulario.controls.anio.value,
        chasis: formulario.controls.chasis.value,
        colorDos: formulario.controls.colorDos.value.toString(),
        colorUno: formulario.controls.colorUno.value.toString(),
        idConductor: this.conductorId,
        nombreMarca: formulario.controls.marca.value,
        nombreModelo: formulario.controls.modelo.value,
        precio: formulario.controls.precio.value
      };

      this._autoService.agregarAuto(nuevoAuto);


    }

  }

  volver() {
    const url = ['menu', 'gestionar', 'auto'];

    const parametros = {
      queryParams: {
        conductorId: this.conductorId
      }

    }

    this._router.navigate(url, parametros);

  }
}
