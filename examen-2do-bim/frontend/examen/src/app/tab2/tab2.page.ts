import { Component } from '@angular/core';
import {Auto} from "../dto/auto";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CarritoCompras} from "../dto/carritoCompras";
import {FacturaHttpService} from "../servicios/http/factura-http-service";
import {DetalleFacturaHttpService} from "../servicios/http/detalle-factura-http-service";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";
import {Factura} from "../dto/factura";
import {AlertController} from "@ionic/angular";
import {__await} from "tslib";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listaAutos: Auto[] = [];
  carritoCompras: CarritoCompras[] = [];

  nombre: string = '';
  cedula: string = '';
  direccion: string = '';
  correo: string = '';
  total: string = '0.0';
  facturaNueva: Factura;

  constructor(private readonly _HttpCliente: HttpClient,
              private readonly _FacturaHttpService: FacturaHttpService,
              private readonly _DetalleFacturaHttpService: DetalleFacturaHttpService,
              private alertController: AlertController,) {
  }

  ngOnInit() {
    var url = environment.url + "/Auto";
    const listaAutos$ = this._HttpCliente.get(url);

    listaAutos$.subscribe(
        (datos) => {
          //this.listaProductos.push(datos);
          this.listaAutos = datos as Auto[];
          console.log(this.listaAutos);
        },
        (error) => {
          console.log(error);
        })

  }

  agregar(auto: Auto) {
    let indiceItem = -1;

    if (this.carritoCompras.some((value, index) => {
      if (value.id === auto.id) {
        indiceItem = index;
        return true;
      } else {
        return false;
      }

    })) {
      this.carritoCompras[indiceItem].cantidad++;
      this.carritoCompras[indiceItem].subTotal = auto.precio * this.carritoCompras[indiceItem].cantidad;
    } else {

      this.carritoCompras.splice(0, 0, {
        id: auto.id,
        cantidad: 1,
        nombre: auto.nombreModelo,
        subTotal: auto.precio
      });
    }

    console.log(this.carritoCompras);
    this.calcularTotal();

  }

  eliminar(itemEliminar: CarritoCompras) {
    this.carritoCompras = this.carritoCompras.filter((item) => {
          return item !== itemEliminar;
        }
    )

    this.calcularTotal();

  }

  confirmarCompra() {

    if (this.cedula === '' || this.nombre === '') {
      this.presentAlert('ERROR', 'Faltan algunos parametros', 'OK');
    } else {
      const facturaCrear$ = this._FacturaHttpService.crear({
        total: Number(this.total),
        cedula: this.cedula,
        direccion: this.direccion,
        correo: this.correo,
        cliente: this.nombre,
        fkUsuario: 1,
      });

      var error = 0;

      facturaCrear$.subscribe(
          (nuevaFactura) => {
            this.facturaNueva = nuevaFactura;
            console.log(this.facturaNueva);
          },
          (error) => {
            console.log(error);
            error = 1;
          }
      );

      setTimeout(() => {
        this.carritoCompras.forEach((item) => {
          const detallefacturaCrear$ = this._DetalleFacturaHttpService.crear({
            cantidad: item.cantidad,
            fkAuto: item.id,
            fkFactura: this.facturaNueva.id,
            subTotal: item.subTotal
          });

          detallefacturaCrear$.subscribe(
              (nuevoDetalle) => {
                console.log(nuevoDetalle);
              },
              (error) => {
                console.log(error);
              }
          );
        })
        this.presentAlert('Exito', 'Se ha ingresado Correctamente', ':D');
      },1000);


    }


  }

  calcularTotal() {
    this.total = '';
    var total = 0;
    this.carritoCompras.forEach((item) => {
      total += item.subTotal;
    })
    this.total = total.toString();
  }

  async presentAlert(header, mensaje, boton) {
    const alert = await this.alertController.create({
      header: header,
      message: mensaje,
      buttons: [boton]
    });
    await alert.present();

  }
}
