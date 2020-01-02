import {Factura} from "./factura";
import {Auto} from "./auto";

export interface DetalleFactura {
    cantidad: number;
    subTotal: number;
    fkFactura: Factura | number | any;
    fkAuto: Auto | number | any;
}
