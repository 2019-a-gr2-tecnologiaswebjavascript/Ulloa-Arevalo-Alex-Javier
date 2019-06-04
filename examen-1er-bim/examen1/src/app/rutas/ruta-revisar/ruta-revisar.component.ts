import { Component, OnInit } from '@angular/core';
import {FacturaService} from "../../servicios/factura/factura.service";
import {TiendaService} from "../../servicios/tienda.service";
import {Factura} from "../../interfaces/factura";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-revisar',
  templateUrl: './ruta-revisar.component.html',
  styleUrls: ['./ruta-revisar.component.css']
})
export class RutaRevisarComponent implements OnInit {

  listaFacturas: Factura[] = this._tiendaService.listaFactura;

  constructor(private readonly _tiendaService: TiendaService,
              private readonly _router: Router) { }

  ngOnInit() {
  }

  volver() {
    const url = ['menu'];
    this._router.navigate(url);
  }

  buscarPorCliente() {

    console.log(this.busqueda);

    if(this.busqueda == "" || this.busqueda == undefined){
      console.log('bien');
      this.listaFacturas = this._tiendaService.listaFactura;
    }
    else {
      this.listaFacturas = this._tiendaService.listaFactura.filter(
        factura => factura.nombre === this.busqueda
      );
    }

  }

  buscarPorCajero() {
    console.log(this.busqueda);

    if(this.busqueda == "" || this.busqueda == undefined){
      console.log('bien');
      this.listaFacturas = this._tiendaService.listaFactura;
    }
    else {
      this.listaFacturas = this._tiendaService.listaFactura.filter(
        factura => factura.cajero === this.busqueda
      );
    }

  }
}
