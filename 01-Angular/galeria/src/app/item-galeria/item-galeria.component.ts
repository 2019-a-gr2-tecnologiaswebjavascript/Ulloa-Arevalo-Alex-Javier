import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {

  title = 'Licoreria';

  @Input()
  textoBoton;

  @Input()
  nombreItem;

  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilio me desmayo :v '+this.nombreItem);
  }

}
/*
@DecoreatorsClase() // -> Funcion que se ejecuta antes de algo
class Usuario{
  @DecoratorsVariable()
  private nombre = 'Alex';

  constructor(@DecoratorsConstructor() nombre){

  }
  @DecoratorsMetodo()
  metodoPublico(){

  }

  private metodoPrivate(){

  }

  protected metodoProtected(){
    
  }

}
*/
