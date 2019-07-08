import {HttpSailsPrincipal} from "./http-sails-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Carrito} from "../../dto/carrito";

@Injectable()
export class CarritoHttpService extends HttpSailsPrincipal<Carrito>{
  constructor(private readonly _httpCliente: HttpClient) {
    super(_httpCliente, environment.url, '/Carrito');
  }


}
