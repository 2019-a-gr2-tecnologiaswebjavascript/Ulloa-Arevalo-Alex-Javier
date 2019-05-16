import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaEquipos = [
    {
      equipoNombre: 'Macara',
      equipoImagen: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Macara_6.png',
      diasParaProxPartido: 6,
    },
    {
      equipoNombre: 'Emelec',
      equipoImagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Liga_Deportiva_Universitaria_de_Quito.png/200px-Liga_Deportiva_Universitaria_de_Quito.png',
      diasParaProxPartido: 1,
    },
    {
      equipoNombre: 'Barcelona',
      equipoImagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Liga_Deportiva_Universitaria_de_Quito.png/200px-Liga_Deportiva_Universitaria_de_Quito.png',
      diasParaProxPartido: 1,
    },
    {
      equipoNombre: 'Cuenca',
      equipoImagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Liga_Deportiva_Universitaria_de_Quito.png/200px-Liga_Deportiva_Universitaria_de_Quito.png',
      diasParaProxPartido: 1,
    },
    {
      equipoNombre: 'Tecnico Universitario',
      equipoImagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Liga_Deportiva_Universitaria_de_Quito.png/200px-Liga_Deportiva_Universitaria_de_Quito.png',
      diasParaProxPartido: 1,
    },
    {
      equipoNombre: 'Mushuc Runa',
      equipoImagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Liga_Deportiva_Universitaria_de_Quito.png/200px-Liga_Deportiva_Universitaria_de_Quito.png',
      diasParaProxPartido: 1,
    },
    {
      equipoNombre: 'Liga',
      equipoImagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Liga_Deportiva_Universitaria_de_Quito.png/200px-Liga_Deportiva_Universitaria_de_Quito.png',
      diasParaProxPartido: 1,
    }
  ];

}
