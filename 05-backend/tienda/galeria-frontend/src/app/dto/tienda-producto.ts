import {Tienda} from "./tienda";
import {Producto} from "./producto";

export interface TiendaProducto {
  createdAt?: number;
  updatedAt?: number;
  id?: number;
  cantidad: number;
  fkTienda: number | Tienda | any;
  fkProducto: number | Producto | any;
  arregloCarrito?: any[];
}
