import {HttpSailsPrincipal} from "./http-sails-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ProductoUsuario} from "../../dto/producto-usuario";

@Injectable()
export class ProductoUsuarioHttpService extends HttpSailsPrincipal<ProductoUsuario>{
  constructor(private readonly _httpCliente: HttpClient) {
    super(_httpCliente, environment.url, '/ProductoUsuario');
  }


}

// 1. buscar con nombre: adrian
// http://localhost:1337/usuario?nombre=Adrian

// 2. buscar usuario nombre: adrian y cedula: 9999
// http://localhost:1337/usuario?nombre=Adrian&cedula:999

// 3 traer 3 primeros usuarios
// http://localhost:1337/usuario?limit=3

// 3 traer 3 primeros usuarios despues de los 9 primeros usuarios
// http://localhost:1337/usuario?limit=3&skip=9

// ordernar por nombre
// http://localhost:1337/usuario?sort=nombre
// http://localhost:1337/usuario?sort=nombre ASC

//traer q usuario contenga letras: 'vic'
// http://localhost:1337/usuario?where={"nombre":{"contains":"vic"}}
// http://localhost:1337/usuario?where={"sueldo":{"<":3000}}

