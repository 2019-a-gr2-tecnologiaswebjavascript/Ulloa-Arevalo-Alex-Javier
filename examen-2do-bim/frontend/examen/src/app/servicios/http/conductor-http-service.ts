import {HttpSailsPrincipal} from "./http-sails-principal";
import {Conductor} from "../../dto/conductor";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class ConductorHttpService extends HttpSailsPrincipal<Conductor>{
    constructor(private readonly _httpCliente: HttpClient) {
        super(_httpCliente, environment.url, '/Conductor');
    }


}
