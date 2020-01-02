import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ConductorHttpService} from "../../servicios/http/conductor-http-service";
import {ConductorService} from "../../servicios/administracion/conductor.service";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.scss'],
})
export class ConductorComponent implements OnInit {
  licenciaValida: boolean = false;


  constructor(private readonly _conductorHttpService:ConductorHttpService,
              private readonly _conductorService:ConductorService,
              private readonly _router: Router,
              private readonly alertController:AlertController) { }

  ngOnInit() {}

  guardarConductor(formulario: NgForm) {
    console.log(formulario.controls);


    const conductorCrear$ = this._conductorHttpService.crear({
      licenciaValida: formulario.controls.licenciaValida.value,
      nombres: formulario.controls.nombre.value,
      numeroAutos: formulario.controls.numeroAutos.value,
      fechaNacimiento: formulario.controls.fechaNacimiento.value,
      apellidos: formulario.controls.apellido.value,
    });

    conductorCrear$.subscribe(
        (nuevoConductor) => {
          this._conductorService.listaConductores.push(nuevoConductor);
        },
        (error) => {
          console.log(error);
        }
    );

    this.presentAlert('Conductor', 'Ingresado correctamente', 'OK');

    console.log(this._conductorService.listaConductores);



  }

  regresar() {
    const url = [''];
    this._router.navigate(url);
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
