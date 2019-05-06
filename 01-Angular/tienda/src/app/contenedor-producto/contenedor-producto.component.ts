import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contenedor-producto',
  templateUrl: './contenedor-producto.component.html',
  styleUrls: ['./contenedor-producto.component.css']
})
export class ContenedorProductoComponent implements OnInit {
  @Input()
  imagen: string;
  @Input()
  productoNumero: string;
  @Input()
  productoNombre: string;
  constructor() { }

  ngOnInit() {
  }

}
