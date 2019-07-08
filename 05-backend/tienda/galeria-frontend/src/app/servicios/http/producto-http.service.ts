import {HttpSailsPrincipal} from "./http-sails-principal";
import {Producto} from "../../dto/producto";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class ProductoHttpService extends HttpSailsPrincipal<Producto>{
  constructor(private readonly _httpCliente: HttpClient) {
    super(_httpCliente, environment.url, '/Producto');
  }


}
