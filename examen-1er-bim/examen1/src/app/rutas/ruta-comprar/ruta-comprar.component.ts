import { Component, OnInit } from '@angular/core';
import {TiendaService} from "../../servicios/tienda.service";
import {NgForm} from "@angular/forms";
import {FacturaService} from "../../servicios/factura/factura.service";
import {Item} from "../../interfaces/item";
import {Router} from "@angular/router";
import {Factura} from "../../interfaces/factura";

@Component({
  selector: 'app-ruta-comprar',
  templateUrl: './ruta-comprar.component.html',
  styleUrls: ['./ruta-comprar.component.css']
})
export class RutaComprarComponent implements OnInit {

  listaProductos: Item[] = this._facturaService.getListItemFactura();
  totalFactura: number = 0.0;

  constructor( private  readonly _tiendaService: TiendaService,
               private readonly _facturaService: FacturaService,
               private readonly _router: Router) { }

  ngOnInit() {
  }

  guardarFactura(formulario: NgForm) {

    console.log(formulario.controls);

    if(formulario.valid ) {
      const factura: Factura = {
        cajero: this._tiendaService.nombreCajero,
        cedula: formulario.controls.cedula.value,
        correo: formulario.controls.correo.value,
        direccion: formulario.controls.direccion.value,
        nombre: formulario.controls.nombre.value,
        total: this.totalFactura,
      };

      console.log(factura);

      this._tiendaService.guardarFactura(factura);
    }
    else {
      alert('Estas mal!!!!!!!!! ya cambia tus padres sufren');
    }


  }



  agregarItem(item: Item) {

    this._facturaService.agregarItemCarrito(item);
    this.totalFactura = this._facturaService.generarTotal();

  }

  restarItem(item: Item) {
    this._facturaService.restarItemCarrito(item);
    this.totalFactura = this._facturaService.generarTotal();
  }

  volver() {
    const url = ['menu'];
    this._router.navigate(url);
  }
}
