import {HttpSailsPrincipal} from "./http-sails-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
// import {environment} from "../../environments/environment";
import {ItemCarritoCompras} from "../dto/item-carrito-compras";

@Injectable()
export class HttpItemCarritoCompras extends HttpSailsPrincipal<ItemCarritoCompras>{
  constructor(private readonly _httpCliente: HttpClient) {
    super(_httpCliente, 'http://localhost:1337', '/ItemCarritoCompras');
  }


}
