import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionarComponent } from './ruta-gestionar.component';

describe('RutaGestionarComponent', () => {
  let component: RutaGestionarComponent;
  let fixture: ComponentFixture<RutaGestionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
