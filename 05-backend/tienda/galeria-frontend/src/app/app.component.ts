import { Component } from '@angular/core';
import {CarritoHttpService} from "./servicios/http/carrito-http.service";
import {ProductoHttpService} from "./servicios/http/producto-http.service";
import {TiendaHttpService} from "./servicios/http/tienda-http.service";
import {TiendaProductoHttpService} from "./servicios/http/tienda-producto-http.service";
import {environment} from "../../../../tienda-frontend/src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {Producto} from "./dto/producto";
import {Carrito} from "./dto/carrito";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'galeria-frontend';

  listaProductos: Producto[];
  listaCarrito: Carrito[];


  constructor(private readonly _CarritoHttpService: CarritoHttpService,
              private readonly _ProductoHttpService: ProductoHttpService,
              private readonly _TiedaHttpService: TiendaHttpService,
              private readonly _TiendaProductoHttpService: TiendaProductoHttpService,
              private  readonly _HttpCliente: HttpClient) {

  }

  ngOnInit() {

    var url = environment.url + "/Producto";
    const listaUsuarios$ = this._HttpCliente.get(url);

    listaUsuarios$.subscribe(
      (datos) => {
        //this.listaProductos.push(datos);
        this.listaProductos = datos as Producto[];
        console.log(this.listaProductos);
        //console.log(datos);
      },
      (error) => {
        console.log(error);
      }
    )

    url = environment.url + "/Carrito";
    const listaCarrito$ = this._HttpCliente.get(url);

    listaCarrito$.subscribe(
      (datos) => {
        //this.listaProductos.push(datos);
        this.listaCarrito = datos as Carrito[];
        console.log(this.listaCarrito);
      },
      (error) => {
        console.log(error);
      }
    )

  }

  agregarCarrito(fecha: string, cantidad: string, tiendaProductoId: number){

    const carritoCrear$ = this._CarritoHttpService.crear({
      fechaCompra: fecha,
      fkTiendaProducto: tiendaProductoId,
      cantidad: Number(cantidad)
    });

    carritoCrear$.subscribe(
      (nuevoCarrito) => {
        console.log(nuevoCarrito);
        this.listaCarrito.push(nuevoCarrito);
      },
      (error) => {
        console.log(error);
      }
    );


  }

}
