import { Injectable } from '@angular/core';
import {ConductorService} from "../tienda/conductor.service";
import {AutoService} from "../tienda/auto.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Item} from "../../interfaces/item";

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  listaCompras: Item[] = [];

  getListItemFactura() {

    var listaReturn: Item[] = [];

    this._autoService.listaAutos.forEach(auto => {
      var conductorDelAuto = this._conductorService.listaConductores.filter(conductor => {
        return conductor.conductorId == auto.idConductor;
      });

      var nombreConductor = conductorDelAuto[0].nombre;

      listaReturn.push(
        {
          chasis: auto.chasis,
          anio: auto.anio,
          precio: auto.precio,
          conductor: nombreConductor,
        }
      );

    });

    return(listaReturn);

  }

  agregarItemCarrito(item: Item){
    let indiceItem = -1;

    if( this.listaCompras.some((value, index) => {
      if (value.chasis === item.chasis) {
        indiceItem = index;
        return true;
      } else {
        return false;
      }

    }) ){
      this.listaCompras[indiceItem].cantidad ++;

    }
    else {
      item.cantidad = 1;
      this.listaCompras.splice(0,0, item);
    }

    console.log(this.listaCompras);


  }

  constructor(private readonly _conductorService: ConductorService,
              private readonly _autoService: AutoService) { }

  restarItemCarrito(item: Item) {
    var indice = this.listaCompras.indexOf(item);

    if(this.listaCompras[indice].cantidad === 1){
      this.listaCompras.splice(indice, 1);
    }
    else{
      this.listaCompras[indice].cantidad --;
    }


  }

  generarTotal() {
    var total = 0.0;
    this.listaCompras.forEach(value => {
      total += value.cantidad*value.precio;
    })
    return total;
  }


}
