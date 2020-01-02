import {HttpSailsPrincipal} from "./http-sails-principal";
import {Auto} from "../../dto/auto";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class AutoHttpService extends HttpSailsPrincipal<Auto>{
    constructor(private readonly _httpCliente: HttpClient) {
        super(_httpCliente, environment.url, '/Auto');
    }


}
