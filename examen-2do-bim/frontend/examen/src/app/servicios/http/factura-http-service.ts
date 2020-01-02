import {HttpSailsPrincipal} from "./http-sails-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Factura} from "../../dto/factura";

@Injectable()
export class FacturaHttpService extends HttpSailsPrincipal<Factura>{
    constructor(private readonly _httpCliente: HttpClient) {
        super(_httpCliente, environment.url, '/Factura');
    }


}
