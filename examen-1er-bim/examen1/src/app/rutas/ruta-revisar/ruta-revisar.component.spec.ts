import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaRevisarComponent } from './ruta-revisar.component';

describe('RutaRevisarComponent', () => {
  let component: RutaRevisarComponent;
  let fixture: ComponentFixture<RutaRevisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaRevisarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaRevisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
