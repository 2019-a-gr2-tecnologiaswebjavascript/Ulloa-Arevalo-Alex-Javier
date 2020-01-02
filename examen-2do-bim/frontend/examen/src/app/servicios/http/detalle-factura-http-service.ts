import {HttpSailsPrincipal} from "./http-sails-principal";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {DetalleFactura} from "../../dto/detalleFactura";

@Injectable()
export class DetalleFacturaHttpService extends HttpSailsPrincipal<DetalleFactura>{
    constructor(private readonly _httpCliente: HttpClient) {
        super(_httpCliente, environment.url, '/DetalleFactura');
    }


}
