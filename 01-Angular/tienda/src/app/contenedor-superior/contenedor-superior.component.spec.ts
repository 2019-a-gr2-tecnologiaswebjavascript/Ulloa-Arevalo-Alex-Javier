import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorSuperiorComponent } from './contenedor-superior.component';

describe('ContenedorSuperiorComponent', () => {
  let component: ContenedorSuperiorComponent;
  let fixture: ComponentFixture<ContenedorSuperiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorSuperiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
