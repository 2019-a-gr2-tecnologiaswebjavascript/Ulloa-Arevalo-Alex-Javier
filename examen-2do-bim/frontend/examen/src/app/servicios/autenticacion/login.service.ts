import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {UsuarioHttpService} from "../http/usuario-http-service";
import {Usuario} from "../../dto/usuario";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private readonly _router:Router,
               private readonly _usuarioHttpService:UsuarioHttpService,
               private  readonly _HttpCliente: HttpClient,) { }

  estaLogeado: boolean = false;
  listaUsuarios: Usuario[] = [];
  verificarUsuario(correo: string, password: string) {

    var url = environment.url+ "/Usuario";
    const listaUsuarios$ = this._HttpCliente.get(url);

    listaUsuarios$.subscribe(
        (datos) => {
          //this.listaProductos.push(datos);
          this.listaUsuarios = datos as Usuario[];
          console.log(this.listaUsuarios);
          //console.log(datos);
        },
        (error) => {
          console.log(error);
        })

        if(this.listaUsuarios.some((usuario)=>{
          return usuario.correo === correo && usuario.password === password
        })){
          const url = ['/tabs', 'tab1'];
          this._router.navigate(url);
          this.estaLogeado = true;
        }

  }

}
