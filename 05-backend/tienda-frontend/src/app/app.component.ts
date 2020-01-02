import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment";
import {UsuarioHttpService} from "./servicios/http/usuario-http.service";
import {ProductoHttpService} from "./servicios/http/producto-http.service";
import {ProductoUsuarioHttpService} from "./servicios/http/producto-usuario-http.service";
import {collectExternalReferences} from "@angular/compiler";

declare var io: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-frontend';
  temperaturas: any[] = [];

  constructor(private  readonly _HttpCliente: HttpClient,
              private readonly _ususarioHttpService:UsuarioHttpService,
              private readonly _productoHttpService:ProductoHttpService,
              private readonly _productoUsuarioHttpService: ProductoUsuarioHttpService) {

  }

  ngOnInit() {

    io.socket.get(
      '/temperatura',
      (arregloTemperaturas: any[])=> {
        this.temperaturas = arregloTemperaturas;
        console.log(this.temperaturas);
      }
    );

    io.socket.on(
      'temperatura',
      (respuesta) => {
        console.log(respuesta);
        if(respuesta.verb === 'created') {
          this.temperaturas.push(respuesta.data);
          console.log(this.temperaturas);
        }
      }
    );


    ///////////////



    const usuarioCrear$ = this._ususarioHttpService.crear({
      nombre: 'Desde',
      apellido: 'Observable',
      cedula: '1804535233',
      correo: 'alex@mail.com',
      estaCasado: true,
      sueldo: 100,
      tipoUsuario: 'pendiente',
      username: 'sweetraare'
    });

    const productoCrear$ = this._productoHttpService.crear({
      codigo: 'codigo',
      nombre: 'producto'

    });

    const productoUsuarioCrear$ = this._productoUsuarioHttpService.crear({
      cantidad: 10,
      fkProducto: 1,
      fkUsuario: 1

    });

    usuarioCrear$.subscribe(
      (nuevoUsuario) => {
        console.log(nuevoUsuario);
      },
      (error) => {
        console.log(error);
      }
    );

    productoCrear$.subscribe(
      (nuevoProducto) => {
        console.log(nuevoProducto);
      },
      (error) => {
        console.log(error);
      }
    );

    productoUsuarioCrear$.subscribe(
      (nuevoUsuarioProducto) => {
        console.log(nuevoUsuarioProducto);
      },
      (error1) => {
        console.log(error1);
      }
    );

    const url = environment.url + "/Usuario";
    const listaUsuarios$ = this._HttpCliente.get(url);

    listaUsuarios$.subscribe(
      (datos) => {
        console.log(datos);
      },
      (error) => {
        console.log(error);
      }
    )
  }


}
