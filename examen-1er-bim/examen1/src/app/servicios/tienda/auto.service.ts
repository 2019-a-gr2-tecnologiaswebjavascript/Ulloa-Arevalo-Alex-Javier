import { Injectable } from '@angular/core';
import {Auto} from "../../interfaces/auto";

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  listaAutos: Auto[] = [];

  constructor() { }

  agregarAuto(nuevoAuto: Auto) {
    this.listaAutos.push(nuevoAuto);
  }

  eliminarConductor(conductorId: number) {

    console.log(conductorId);

    this.listaAutos = this.listaAutos.filter(
      auto => auto.idConductor !== conductorId

    );
  }

}
