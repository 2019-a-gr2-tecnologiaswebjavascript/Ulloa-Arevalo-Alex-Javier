import { Injectable } from '@angular/core';
import {Conductor} from "../../dto/conductor";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  listaConductores: Conductor[] = [];

  constructor(private readonly _HttpCliente:HttpClient) {
    this.llenarConductores();
    console.log('estoy llenando');
  }

  llenarConductores() {
    var url = environment.url + "/Conductor";
    const listaConductores$ = this._HttpCliente.get(url);

    listaConductores$.subscribe(
        (datos) => {
          //this.listaProductos.push(datos);
          this.listaConductores = datos as Conductor[];
        },
        (error) => {
          console.log(error);
        })

  }

}
