import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AutoService} from "../../../../servicios/tienda/auto.service";
import {Auto} from "../../../../interfaces/auto";

@Component({
  selector: 'app-gestionar-autos',
  templateUrl: './gestionar-autos.component.html',
  styleUrls: ['./gestionar-autos.component.css']
})
export class GestionarAutosComponent implements OnInit {
  busqueda: string = '';

  conductorId: number;
  listaAutosMostrar: Auto[] = this._autoService.listaAutos.filter(
    auto => auto.idConductor == this.conductorId
  );

  constructor( private readonly _activatedRouter: ActivatedRoute,
               private  readonly  _router: Router,
               private  readonly  _autoService:AutoService) { }

  ngOnInit() {
    //$ -> para indicar que es un observable
    const parametrosConsulta$ = this._activatedRouter.queryParams;

    parametrosConsulta$.subscribe(
      (parametrosConsulta)=> {
        console.log('Parametros consulta: ', parametrosConsulta);
        this.conductorId = parametrosConsulta.conductorId;
      }
    );

    this.listaAutosMostrar = this._autoService.listaAutos.filter(
      auto => auto.idConductor == this.conductorId
    );


  }

  buscar() {

    console.log(this.busqueda);

    if(this.busqueda == "" || this.busqueda == undefined){
      console.log('bien');
      this.listaAutosMostrar = this._autoService.listaAutos;
    }
    else {
      this.listaAutosMostrar = this._autoService.listaAutos.filter(
        auto => auto.chasis === this.busqueda
      );
    }


  }

  crear() {

    const url = ['menu', 'gestionar', 'auto', 'crear'];
    this._router.navigate(url);

    const parametros = {
      queryParams: {
        conductorId: this.conductorId
      }

    }

    this._router.navigate(url, parametros);

  }

  elimarAuto(autoEliminar: Auto) {
    this._autoService.listaAutos = this._autoService.listaAutos.filter(
      auto => auto !== autoEliminar
    );


    this.listaAutosMostrar = this._autoService.listaAutos;

  }

  volver() {

    const url = ['menu', 'gestionar'];
    this._router.navigate(url);
  }
}
