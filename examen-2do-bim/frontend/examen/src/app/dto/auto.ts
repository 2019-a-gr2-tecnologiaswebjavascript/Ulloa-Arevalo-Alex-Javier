import {Conductor} from "./conductor";
import {DetalleFactura} from "./detalleFactura";

export interface Auto {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    chasis: number;
    nombreMarca: string;
    colorUno: string;
    colorDos?: string;
    nombreModelo: string;
    anio: number;
    precio: number;
    fkConductor: Conductor | number | any;
    arregloDetalleFactura?: DetalleFactura[] | any;

}
