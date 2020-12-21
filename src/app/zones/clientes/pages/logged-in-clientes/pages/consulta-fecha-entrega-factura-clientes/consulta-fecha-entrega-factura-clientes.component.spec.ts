import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFechaEntregaFacturaClientesComponent } from './consulta-fecha-entrega-factura-clientes.component';

describe('ConsultaFechaEntregaFacturaClientesComponent', () => {
  let component: ConsultaFechaEntregaFacturaClientesComponent;
  let fixture: ComponentFixture<ConsultaFechaEntregaFacturaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaFechaEntregaFacturaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaFechaEntregaFacturaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
