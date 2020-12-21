import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContactoColaboradoresComponent } from './formulario-contacto-colaboradores.component';

describe('FormularioContactoColaboradoresComponent', () => {
  let component: FormularioContactoColaboradoresComponent;
  let fixture: ComponentFixture<FormularioContactoColaboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioContactoColaboradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioContactoColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
