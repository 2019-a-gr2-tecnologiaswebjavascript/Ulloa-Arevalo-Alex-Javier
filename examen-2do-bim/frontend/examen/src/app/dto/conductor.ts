export interface Conductor {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    nombres: string;
    apellidos: string;
    fechaNacimiento: string;
    numeroAutos: number;
    licenciaValida: boolean;
    arregloAutos? : any[];
}
