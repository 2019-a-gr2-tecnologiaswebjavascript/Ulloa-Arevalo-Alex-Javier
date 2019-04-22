import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-compras';

@Injectable()
export class CarritoService {
    carritoCompras: ItemCarritoCompras[]= [];

    agregarCarritoCompras(itemCarrito: ItemCarritoCompras): ItemCarritoCompras[]{

        const identificador = itemCarrito.valor;
        
        let indiceItem = -1;

        const existeItem = this.carritoCompras.some(
            (item: ItemCarritoCompras, indice) => {
                if(item.valor == identificador)
                {
                    indiceItem = indice;
                    return true;
                }
                else {
                    return false;
                }
            }
        );

        if (existeItem){
            this.anadirAlContador(indiceItem);
        }else{
            this.anadirAlCarrito(itemCarrito);
        }
        console.log('Se añadio al carrito!!', itemCarrito);
        return this.carritoCompras;

    }

    private anadirAlContador(indice: number) {
        this.carritoCompras[indice].cantidad++;
    }

    private anadirAlCarrito(item: ItemCarritoCompras) {
        item.cantidad = 1;
        this.carritoCompras.splice(0,0,item);
    }

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