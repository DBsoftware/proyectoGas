import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAutorizacionDatosComponent } from './form-autorizacion-datos.component';

describe('FormAutorizacionDatosComponent', () => {
  let component: FormAutorizacionDatosComponent;
  let fixture: ComponentFixture<FormAutorizacionDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAutorizacionDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAutorizacionDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
