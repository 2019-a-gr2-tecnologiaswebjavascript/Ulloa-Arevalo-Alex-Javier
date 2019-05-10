import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductoVideojuegoRpgComponent } from './ruta-producto-videojuego-rpg.component';

describe('RutaProductoVideojuegoRpgComponent', () => {
  let component: RutaProductoVideojuegoRpgComponent;
  let fixture: ComponentFixture<RutaProductoVideojuegoRpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductoVideojuegoRpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductoVideojuegoRpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
