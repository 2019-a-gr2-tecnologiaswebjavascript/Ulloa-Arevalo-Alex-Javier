import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Auto} from "../../dto/auto";
import {environment} from "../../../environments/environment";
import {Conductor} from "../../dto/conductor";
import {HttpClient} from "@angular/common/http";
import {AutoHttpService} from "../../servicios/http/auto-http-service";

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss'],
})
export class AutoComponent implements OnInit {

  conductorId: number;
  conductorNombre: string;
  chasis: string = '';


  listaAutos: Auto[] = [];
  listaAutosVisible: Auto[] = [];

  constructor(private readonly _activatedRouter: ActivatedRoute,
              private  readonly  _router: Router,
              private readonly _HttpCliente:HttpClient,
              private readonly _autoHttpService:AutoHttpService) { }

  ngOnInit() {
    const parametrosConsulta$ = this._activatedRouter.queryParams;

    parametrosConsulta$.subscribe(
        (parametrosConsulta)=> {
          console.log('Parametros consulta: ', parametrosConsulta);
          this.conductorId = parametrosConsulta.id;
          this.conductorNombre = parametrosConsulta.nombre;
        }
    );

    var url = environment.url + "/Auto";
    const listaConductores$ = this._HttpCliente.get(url);

    listaConductores$.subscribe(
        (datos) => {
          //this.listaProductos.push(datos);
          this.listaAutos = datos as Auto[];
          this.listaAutos = this.listaAutos.filter((auto)=>{
            console.log(auto.fkConductor, this.conductorId);
            return auto.fkConductor.id == this.conductorId;
          })
          this.listaAutosVisible = this.listaAutos;

        },
        (error) => {
          console.log(error);
        })

  }

  buscar() {

    if(this.chasis === '') {
      this.listaAutosVisible = this.listaAutos;
    } else {
      this.listaAutosVisible = this.listaAutos.filter((auto)=>  {
        return auto.chasis.toString() === this.chasis;
      })
    }

  }

  crearAuto() {
    const url= ['administracion', 'auto', 'crear'];
    const parametros = {
      queryParams: {
        fkConductor: this.conductorId
      }
    }

    this._router.navigate(url, parametros);

  }

    eliminar(id: number) {
        const autoEliminar$ = this._autoHttpService.eliminar(id);
        autoEliminar$.subscribe(
            (nuevoAuto) => {
                console.log(nuevoAuto);
            },
            (error) => {
                console.log(error);
            }
        );

        this.listaAutosVisible = this.listaAutos.filter(
            (conductor) => {
                return conductor.id !== id;
            });

        this.listaAutos = this.listaAutosVisible;



    }

}
