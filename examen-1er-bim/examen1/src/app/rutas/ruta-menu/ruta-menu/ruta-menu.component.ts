import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-menu',
  templateUrl: './ruta-menu.component.html',
  styleUrls: ['./ruta-menu.component.css']
})
export class RutaMenuComponent implements OnInit {

  constructor(private readonly _router: Router ) { }

  ngOnInit() {
  }

  irARevisarCompras() {
    console.log('ir a compras')
    const url = ['menu','revisar'];
    this._router.navigate(url);
  }

  irAGestionarGrupos() {
    console.log('ir a gestionar');

    const url = ['menu','gestionar'];
    this._router.navigate(url);

  }

  irAComprar() {
    console.log('ir a comprar');

    const url = ['menu', 'comprar'];
    this._router.navigate(url);

  }

  salir() {

    const url = ['home', 'app'];
    this._router.navigate(url);
  }
}
