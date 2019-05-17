import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  fecha = new Date();  // 2009-11-10
  month = this.fecha.toLocaleString('en-us', { month: 'long' });

  listaPartidos = [
    {
      mes: 'May',
      dia: '12th',
      golesLocal: 3,
      golesVisita: 1,
      nombreLocal: 'Macara',
      nombreVisita: 'Fuerza Amarilla'
    },
    {
      mes: 'May',
      dia: '12th',
      golesLocal: 3,
      golesVisita: 1,
      nombreLocal: 'Macara',
      nombreVisita: 'Fuerza Amarilla'
    },
    {
      mes: 'May',
      dia: '13th',
      golesLocal: 0,
      golesVisita: 0,
      nombreLocal: 'Aucas',
      nombreVisita: 'Universidad Catolica'
    },
    {
      mes: 'May',
      dia: '14th',
      golesLocal: 3,
      golesVisita: 1,
      nombreLocal: 'Liga',
      nombreVisita: 'Independiente del valle'
    },
  ];

}
