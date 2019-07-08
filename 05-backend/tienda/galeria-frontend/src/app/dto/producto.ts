export interface Producto {
  createdAt?: number;
  updatedAt?: number;
  id?: number;
  nombre: string;
  tipoProducto?: string;
  valor: number;
  arregloTiendaProductos?: any[];
}
