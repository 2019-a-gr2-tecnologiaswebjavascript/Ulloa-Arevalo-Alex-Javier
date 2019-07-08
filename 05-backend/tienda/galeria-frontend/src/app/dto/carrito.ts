import {TiendaProducto} from "./tienda-producto";

export interface Carrito {
  createdAt?: number;
  updatedAt?: number;
  id?: number;
  fechaCompra: string;
  cantidad: number;
  fkTiendaProducto: number | TiendaProducto | any;
}
