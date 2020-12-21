import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionClientesComponent } from './iniciar-sesion-clientes.component';

describe('IniciarSesionClientesComponent', () => {
  let component: IniciarSesionClientesComponent;
  let fixture: ComponentFixture<IniciarSesionClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarSesionClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSesionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
