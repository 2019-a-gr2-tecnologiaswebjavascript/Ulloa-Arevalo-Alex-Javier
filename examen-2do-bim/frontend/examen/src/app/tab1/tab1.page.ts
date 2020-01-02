import { Component } from '@angular/core';
import {Conductor} from "../dto/conductor";
import {environment} from "../../environments/environment";
import {Usuario} from "../dto/usuario";
import {HttpClient} from "@angular/common/http";
import {ConductorHttpService} from "../servicios/http/conductor-http-service";
import {Router} from "@angular/router";
import {ConductorService} from "../servicios/administracion/conductor.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
/*
  listaConductores: Conductor[] = this._conductorService.listaConductores;
  listaConductoresVisible: Conductor[] = this._conductorService.listaConductores;
*/

  listaConductores: Conductor[] = [];
  listaConductoresVisible: Conductor[] = [];

  nombre: string = '';

  ngOnInit(){
    //this._conductorService.llenarConductores();
    //this.llenarConductores();
    console.log('on init');

  }

  constructor( private readonly _HttpCliente:HttpClient,
               private readonly _conductorHttpService:ConductorHttpService,
               private readonly _router:Router,
               private readonly _conductorService:ConductorService) {
/*

    _conductorService.llenarConductores();
    console.log('estoy en el constructor;');
    console.log(this._conductorService.listaConductores);
    this.listaConductores = _conductorService.listaConductores;

    this.listaConductoresVisible = this._conductorService.listaConductores;
    console.log(this.listaConductoresVisible);
    //this.llenarConductores();
*/

    var url = environment.url + "/Conductor";
    const listaConductores$ = this._HttpCliente.get(url);

    listaConductores$.subscribe(
        (datos) => {
          //this.listaProductos.push(datos);
          this.listaConductores = datos as Conductor[];
          this.listaConductoresVisible = this.listaConductores;
          console.log(this.listaConductores);
        },
        (error) => {
          console.log(error);
        })
    this._conductorService.listaConductores = this.listaConductoresVisible;
    console.log('constructor');


  }

  eliminar(id: number) {
    const conductorEliminar$ = this._conductorHttpService.eliminar(id);
    conductorEliminar$.subscribe(
        (nuevoConductor) => {
          console.log(nuevoConductor);
        },
        (error) => {
          console.log(error);
        }
    );

    this.listaConductoresVisible = this.listaConductores.filter(
        (conductor) => {
          return conductor.id !== id;
        });

    this.listaConductores = this.listaConductoresVisible;



  }

  autos(conductor: Conductor) {
    const url= ['administracion', 'auto'];
    const parametros = {
      queryParams: {
        id: conductor.id,
        nombre: conductor.nombres
      }
    }

    this._router.navigate(url, parametros);
    this._conductorService.llenarConductores();

  }

  buscar() {

    if(this.nombre === '')
    {
      this.listaConductoresVisible = this.listaConductores;
    } else  {
      this.listaConductoresVisible = this.listaConductores.filter(
          (conductor) => {
        return conductor.nombres === this.nombre;
      });
    }


  }

  crearConductor() {
    const url= ['administracion', 'conductor'];
    this._router.navigate(url);
    this._conductorService.llenarConductores();

  }


  /*llenarConductores() {
    var url = environment.url + "/Conductor";
    const listaConductores$ = this._HttpCliente.get(url);

    listaConductores$.subscribe(
        (datos) => {
          //this.listaProductos.push(datos);
          this.listaConductores = datos as Conductor[];
          this.listaConductoresVisible = this.listaConductores;
          console.log(this.listaConductores);
        },
        (error) => {
          console.log(error);
        })

  }
*/

}


