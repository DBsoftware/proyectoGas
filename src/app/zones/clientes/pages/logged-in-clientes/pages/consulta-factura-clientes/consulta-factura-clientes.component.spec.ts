import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFacturaClientesComponent } from './consulta-factura-clientes.component';

describe('ConsultaFacturaClientesComponent', () => {
  let component: ConsultaFacturaClientesComponent;
  let fixture: ComponentFixture<ConsultaFacturaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaFacturaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaFacturaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
