import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AutoHttpService} from "../../../servicios/http/auto-http-service";
import {ActivatedRoute} from "@angular/router";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
    selector: 'app-crear-auto',
    templateUrl: './crear-auto.component.html',
    styleUrls: ['./crear-auto.component.scss'],
})
export class CrearAutoComponent implements OnInit {

    conductorId: string;

    constructor( private readonly  _autoHttpService:AutoHttpService,
                 private readonly _activatedRouter: ActivatedRoute) { }

    ngOnInit() {
        const parametrosConsulta$ = this._activatedRouter.queryParams;

        parametrosConsulta$.subscribe(
            (parametrosConsulta)=> {
                this.conductorId = parametrosConsulta.fkConductor;

            }
        );

    }

    guardarAuto(formulario: NgForm) {
        console.log(formulario.controls);
        const autoCrear$ = this._autoHttpService.crear({
            fkConductor: this.conductorId,
            chasis: formulario.controls.chasis.value,
            anio: formulario.controls.anio.value,
            nombreModelo: formulario.controls.modelo.value,
            nombreMarca: formulario.controls.marca.value,
            colorDos: formulario.controls.colorDos.value,
            colorUno: formulario.controls.colorDos.value,
            precio: formulario.controls.precio.value
        });

        autoCrear$.subscribe(
            (nuevoAuto) => {
                console.log(nuevoAuto);
                alert('Conductor creado existosamente');
            },
            (error) => {
                alert(error);
            }
        );



    }
}
