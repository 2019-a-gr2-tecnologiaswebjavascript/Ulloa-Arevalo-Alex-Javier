import {Factura} from "./factura";

export interface Usuario {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    correo: string;
    password: string;
    nombre: string;
    arregloFactura: Factura[] | any;

}
