import { Component, OnInit } from '@angular/core';
import {Conductor} from '../../../../interfaces/conductor';
import {ConductorService} from '../../../../servicios/tienda/conductor.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-conductor',
  templateUrl: './crear-conductor.component.html',
  styleUrls: ['./crear-conductor.component.css']
})
export class CrearConductorComponent implements OnInit {

  constructor( private readonly _conductorService: ConductorService,
               private readonly _router: Router,
  ) { }

  ngOnInit() {
  }

  guardarUsuario(formulario) {
    console.log(formulario);
    if (formulario.valid == false)
    {
      alert('Algo esta mal!!');
    }
    else {

      const nuevoConductor: Conductor =
        {
          nombre: formulario.controls.nombre.value,
          apellido: formulario.controls.apellido.value,
          licenciaValida: formulario.controls.licenciaValida.value,
          numeroAutos: formulario.controls.numeroAutos.value,
          fechaNacimiento: formulario.controls.fechaNacimiento.value,

        };

      this._conductorService.agregarConductor(nuevoConductor);

    }
  }

  volver() {
    const url = ['menu','gestionar'];
    this._router.navigate(url);
  }
}
