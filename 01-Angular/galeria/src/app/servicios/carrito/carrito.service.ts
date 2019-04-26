import { ItemCarritoCompras } from './../../interfaces/item-carrito-compras';
import { Injectable } from '@angular/core';
import { TiendaCarritoCompras } from '../../interfaces/tienda-carrito-compras';

@Injectable()
export class CarritoService {
    carritoCompras: TiendaCarritoCompras[] = [];

    agregarCarritoCompras(itemCarrito: TiendaCarritoCompras): TiendaCarritoCompras[]{

        const nombreTienda = itemCarrito.nombreTienda;
        console.log('nombreTienda: ', nombreTienda);
        let indiceTienda = -1;
        const existeTienda = this.carritoCompras.some(
            (item: TiendaCarritoCompras, indice) => {
                if (item.nombreTienda === nombreTienda) {
                    indiceTienda = indice;
                    return true;
                } else {
                    return false;
                }
            }
        );

        if (existeTienda) {
            this.anadirItemCarritoATienda(itemCarrito, indiceTienda);
        } else {
            this.anadirTienda(itemCarrito);
        }
        console.log('Se añadio al carrito!!', itemCarrito);
        return this.carritoCompras;

    }

    private anadirItemCarritoATienda(itemCarrito: TiendaCarritoCompras, indiceTienda: number) {
        const tienda: TiendaCarritoCompras = this.carritoCompras.find( x => x.nombreTienda === itemCarrito.nombreTienda );

        const item: ItemCarritoCompras = itemCarrito.itemsCarritoComprados[0];
        let indiceItem = -1;
        const existeItem = tienda.itemsCarritoComprados.some(
            (itemSome: ItemCarritoCompras, indice) => {
                if (itemSome.valor === item.valor) {
                    indiceItem = indice;
                    return true;
                } else {
                    return false;
                }
            }
        );

        if (existeItem) {
            console.log('existe el item: ', item.valor, 'en la tienda: ', tienda.nombreTienda);
            this.carritoCompras[indiceTienda].itemsCarritoComprados[indiceItem].cantidad++;

        } else {
            console.log('NO! existe el item: ', item.valor, 'en la tienda: ', tienda.nombreTienda);
            item.cantidad = 1;
            this.carritoCompras[indiceTienda].itemsCarritoComprados.splice(0, 0, item);

        }

    }

    private anadirTienda(itemCarrito: TiendaCarritoCompras) {
      const tiendaCarrito: TiendaCarritoCompras = itemCarrito;
      tiendaCarrito.itemsCarritoComprados[0].cantidad = 1;
      this.carritoCompras.splice(0, 0, tiendaCarrito);

    }

    private anadirAlContador(indice: number) {
        // this.carritoCompras[indice].cantidad++;
    }

    // private anadirAlCarrito(item: ItemCarritoCompras) {
    //    item.cantidad = 1;
    //    this.carritoCompras.splice(0,0,item);
    // }

}
/*
[1,2,3,4].forEach( // undefined -> void
    (valor: number) => {
    console.log('valor: ', valor);
    if (valor == 1) {
        console.log('Encontre el 1');
    }
    });

const respuestaSome = [1,2,3,4].some(
    (valor: number): boolean =>
    {
        return valor === 3
    }
); // similar al operadador OR

const respuestaEvery = [1,2,3,4].every(
    (valor: number): boolean =>
    {
        return valor === 2
    }
); // similar al operador AND

console.log(respuestaEvery);

/*
function busqueda(valor, indice, arreglo){
    console.log('valor: ', valor);

    if (valor === 1) {
        console.log('Encontre el 1');
    }

}
*/
