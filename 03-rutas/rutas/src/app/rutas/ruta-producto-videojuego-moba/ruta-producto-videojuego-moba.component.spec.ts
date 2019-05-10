import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductoVideojuegoMobaComponent } from './ruta-producto-videojuego-moba.component';

describe('RutaProductoVideojuegoMobaComponent', () => {
  let component: RutaProductoVideojuegoMobaComponent;
  let fixture: ComponentFixture<RutaProductoVideojuegoMobaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductoVideojuegoMobaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductoVideojuegoMobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
