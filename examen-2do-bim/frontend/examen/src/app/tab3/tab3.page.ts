import { Component } from '@angular/core';
import {AlertController, ModalController} from "@ionic/angular";
import {Factura} from "../dto/factura";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Conductor} from "../dto/conductor";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  listaFacturas: Factura[] = [];
  listaFacturasVisible: Factura[] = [];

  busqueda: string = '';

  ngOnInit() {
    var url = environment.url + "/Factura";
    const listaConductores$ = this._HttpCliente.get(url);

    listaConductores$.subscribe(
        (datos) => {
          //this.listaProductos.push(datos);
          this.listaFacturas = datos as Factura[];
          this.listaFacturasVisible = this.listaFacturas;
          console.log(this.listaFacturas);
        },
        (error) => {
          console.log(error);
        })

  }

  constructor( private alertController:AlertController,
               private readonly _HttpCliente:HttpClient,
               private readonly modalController:ModalController) {

  }
  consultar() {
    console.log(this.busqueda);
    console.log(this.busqueda.length);

    if(this.busqueda === '' || this.busqueda.length < 1 ) {
      this.listaFacturasVisible = this.listaFacturas;
    }
    else {
      this.listaFacturasVisible = this.listaFacturas.filter((factura) => {
        return factura.cliente.startsWith(this.busqueda);
      })
    }


  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Crear Equipo',
      message: 'El Equipo ha sido creado',
      buttons: ['OK']
    });

    await alert.present();
  }
  //
  // hola(){
  //   this.presentAlert();
  // }

  actualizar() {
    var url = environment.url + "/Factura";
    const listaConductores$ = this._HttpCliente.get(url);

    listaConductores$.subscribe(
        (datos) => {
          //this.listaProductos.push(datos);
          this.listaFacturas = datos as Factura[];
          this.listaFacturasVisible = this.listaFacturas;
          console.log(this.listaFacturas);
        },
        (error) => {
          console.log(error);
        })

  }



}
