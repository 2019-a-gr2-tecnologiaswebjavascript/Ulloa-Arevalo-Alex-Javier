import {DetalleFactura} from "./detalleFactura";
import {Usuario} from "./usuario";

export interface Factura {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    cliente: string;
    cedula: string;
    direccion?: string;
    telefono?: string;
    correo?: string;
    total: number;
    arregloDetalleFactura?: DetalleFactura[] | any;
    fkUsuario: Usuario | number | any;

}
