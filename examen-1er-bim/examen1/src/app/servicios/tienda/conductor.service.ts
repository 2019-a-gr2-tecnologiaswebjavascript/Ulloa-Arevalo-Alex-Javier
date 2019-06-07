import { Injectable } from '@angular/core';
import {Conductor} from "../../interfaces/conductor";

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  listaConductores: Conductor[] = [];

  constructor() { }

  agregarConductor(nuevoConductor: Conductor){

    var maxValueOfY = Math.max(...this.listaConductores.map(o => o.conductorId), 0);

    nuevoConductor.conductorId = maxValueOfY+1;

    console.log(maxValueOfY);

    this.listaConductores.push(nuevoConductor);

  }


}
