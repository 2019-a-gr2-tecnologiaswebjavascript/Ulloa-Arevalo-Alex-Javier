import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor-superior',
  templateUrl: './contenedor-superior.component.html',
  styleUrls: ['./contenedor-superior.component.css']
})
export class ContenedorSuperiorComponent implements OnInit {

  listaItemsDerecha = [
      'help',
      'account',
      'cart'
    ];
  constructor() { }

  ngOnInit() {
  }

}
