import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda';
  listaProductos = [
    {
      imagen: '../assets/imagenes/producto1.webp',
      productoNombre: 'Bumpy',
      productoNumero: '#1'
    },
    {
      imagen: '../assets/imagenes/producto2.webp',
      productoNombre: 'high tea',
      productoNumero: '#2'
    },
    {
      imagen: '../assets/imagenes/producto2.webp',
      productoNombre: 'mustachio',
      productoNumero: '#3'
    },
    {
      imagen: '../assets/imagenes/producto4.webp',
      productoNombre: 'mustachio',
      productoNumero: '#4'
    },
    {
      imagen: '../assets/imagenes/producto5.webp',
      productoNombre: 'mustachio',
      productoNumero: '#5'
    },
    {
      imagen: '../assets/imagenes/producto6.webp',
      productoNombre: 'mustachio',
      productoNumero: '#6'
    },
  ];
  listaItemMenuSuperior = [
      'FILTER',
      'ALL',
      'MILK',
      'DARK',
      'CARAMEL',
      'AVOIDS GLUTEN',
      'NUTS',
      'VEGAN'
  ];

}
