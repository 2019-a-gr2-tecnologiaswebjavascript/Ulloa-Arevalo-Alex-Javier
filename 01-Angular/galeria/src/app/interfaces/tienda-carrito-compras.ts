import { ItemCarritoCompras } from './item-carrito-compras';
export interface TiendaCarritoCompras {
  nombreTienda: string;
  itemsCarritoComprados?: ItemCarritoCompras[];
}
