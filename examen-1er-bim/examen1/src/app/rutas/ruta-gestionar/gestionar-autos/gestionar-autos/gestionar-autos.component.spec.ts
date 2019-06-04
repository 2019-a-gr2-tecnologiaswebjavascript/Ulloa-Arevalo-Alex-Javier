import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarAutosComponent } from './gestionar-autos.component';

describe('GestionarAutosComponent', () => {
  let component: GestionarAutosComponent;
  let fixture: ComponentFixture<GestionarAutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarAutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
