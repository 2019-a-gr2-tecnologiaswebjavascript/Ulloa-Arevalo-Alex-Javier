import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  clase = 'rojo';

  title = 'floreria';

  arregloFlores = [
    new Flor("Papitas", "a lo bestia"),
    new Flor("Carnitas", "gorditas"),
    new Flor("chicas", "cheveres")
  ];

  constructor(private readonly _carritoService:CarritoService){

  }

  arregloFLoresJs = [
    {
      titulo: "Don Jose",
      nombre: "papitas",
      descripcion: "a lo bestia",
      notas: [
        'Papitas',
        'Empanadas',
      ]
    },
    {
      titulo: "Don Pepito",
      nombre: "carnitas",
      descripcion: "gorditas",
      notas: [
        'Motes',
        'Choclos',
      ]
    },
    {
      titulo: "Doña Maria",
      nombre: "chicas",
      descripcion: "cheveres",
      notas: [
        'Cervezas',
        'Trago',
      ]
    }
  ]

  cambioChela(evento: boolean){
    console.log('Llego a chela: ', evento);
    const verde: string = 'verde';
    this.clase = verde;


  }

  cambioCerveza(evento: boolean){
    console.log('Llego a cerveza: ', evento);
    const amarillo: string = 'amarillo';
    this.clase = amarillo;
  }

  estaMostrando = false;

  mostrar(estaMostrando: boolean){
    this.estaMostrando = estaMostrando;
  }

}


class Flor{

  /*

  nombre: string;
  descripcion: string;

  constructor(nombre: string, descripcion: string){
    this.nombre = nombre;
    this.descripcion = descripcion;

  }

  TODO LO QUE ESTA ARRIBA SE PUEDE HACER EN LA LINEA DE ABAJO!!!!!!

*/

  constructor(public nombre: string, public descripcion: string){

  }

} 