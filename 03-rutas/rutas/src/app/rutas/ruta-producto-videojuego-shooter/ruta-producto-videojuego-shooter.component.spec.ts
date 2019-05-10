import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductoVideojuegoShooterComponent } from './ruta-producto-videojuego-shooter.component';

describe('RutaProductoVideojuegoShooterComponent', () => {
  let component: RutaProductoVideojuegoShooterComponent;
  let fixture: ComponentFixture<RutaProductoVideojuegoShooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductoVideojuegoShooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductoVideojuegoShooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
