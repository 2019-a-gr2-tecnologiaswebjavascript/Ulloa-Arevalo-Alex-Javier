import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  listaBusquedas = [
    {
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg',
      nombre: 'Ecuador'
    },
    {
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Macara_6.png',
      nombre: 'Macara'
    },
    {
      imagen: 'http://cdn.mashup-web.com/img/categories/copa-libertadores.png',
      nombre: 'Copa libertadores'
    },
  ];
}
