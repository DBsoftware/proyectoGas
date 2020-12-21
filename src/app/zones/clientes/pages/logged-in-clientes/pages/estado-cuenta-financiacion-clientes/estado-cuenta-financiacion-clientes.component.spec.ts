import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCuentaFinanciacionClientesComponent } from './estado-cuenta-financiacion-clientes.component';

describe('EstadoCuentaFinanciacionClientesComponent', () => {
  let component: EstadoCuentaFinanciacionClientesComponent;
  let fixture: ComponentFixture<EstadoCuentaFinanciacionClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoCuentaFinanciacionClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoCuentaFinanciacionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
