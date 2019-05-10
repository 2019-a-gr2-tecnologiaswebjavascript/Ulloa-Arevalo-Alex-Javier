import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor( private readonly _activatedrouter: ActivatedRoute ) { }

  ngOnInit() {
    const parametros$ = this._activatedrouter.params;
    //$ -> para indicar que es un observable
    const parametrosConsulta$ = this._activatedrouter.queryParams;

    parametrosConsulta$.subscribe(
      (parametrosConsulta)=> {
        console.log('Parametros consulta: ', parametrosConsulta);
      }
    );

    parametros$.subscribe(
      (parametros)=> { // ok
        console.log('Parametros: ', parametros);
      },
      (error) => { // error
        console.log('Error: ', error);
      },
      () => { // Completo ESTA ES OPCIONAL
        console.log('Completo');
      }
    )

  }

}
