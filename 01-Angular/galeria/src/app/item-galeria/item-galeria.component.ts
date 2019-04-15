import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit, OnDestroy {

  title = 'Licoreria';

  url = 'https://dpf77bhxauhdh.cloudfront.net/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/c/e/cerveza-corona-extra-355-cc-pack-24-botellas.jpg';

  // en varibles const una sola reasignacion
  // var no vamos a utilizar
  // let permite cambiar el valor

  @Input()
  titulo;

  @Input()
  textoBoton;

  @Input()
  nombreItem;

  // Dependency Injection
  // Inyeccion de dependencias.
  // las dependencias en los componentes son los SERVICIOS -> COMPARTIDOS ENTRE COMPONENTES Y SERVICIOS
  constructor(private readonly _carritoService: CarritoService ) { }

  ngOnInit() {
    console.log('empezo!');
    console.log(this._carritoService.carritoCompras);
  }

  ngOnDestroy(){
    console.log('rip');
  }

  alertar(){
    alert('Auxilio me desmayo :v '+this.nombreItem);
  }

  alertarBlur(){
    alert('Alertando bliur');
  }

  cambiarImagen(){
    const url1= 'https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/03/07/noticia-seis-estudios-cientificos-que-demuestran-los-beneficios-de-la-cerveza-para-la-salud.png';
    const url2 = 'https://dpf77bhxauhdh.cloudfront.net/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/c/e/cerveza-corona-extra-355-cc-pack-24-botellas.jpg';
    
    if (this.url === url1){
      this.url = url2;
      this.cambioChela.emit(true);
    }
    else{
      this.url = url1;
      this.cambioCerveza.emit(true);
    }
 
  }

  @Input()
  notas;

  @Output()
  cambioChela: EventEmitter<boolean> = new EventEmitter()

  @Output()
  cambioCerveza: EventEmitter<boolean> = new EventEmitter()

  agregarCarrito(valorCarrito){
    //this._carritoService.carritoCompras.push(itemCarrito);
    
    const itemCarrito = {
      valor: valorCarrito,
      nombreTienda: this.titulo
    }
    
    this._carritoService.carritoCompras.splice(0,0,itemCarrito); // para agregar al principio
    console.log(this._carritoService.carritoCompras);
  }

}

/*
Ciclo de vida del componente
Vivir 
Morir

ngOnInit -> OnInit aqui empieza el componente

ngOnDestroy -> OnDestroy aqui termina el componente

*/

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
