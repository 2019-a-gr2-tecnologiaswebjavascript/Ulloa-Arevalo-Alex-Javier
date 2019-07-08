import {HttpSailsPrincipal} from "./http-sails-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {TiendaProducto} from "../../dto/tienda-producto";

@Injectable()
export class TiendaProductoHttpService extends HttpSailsPrincipal<TiendaProducto>{
  constructor(private readonly _httpCliente: HttpClient) {
    super(_httpCliente, environment.url, '/TiendaProducto');
  }


}
