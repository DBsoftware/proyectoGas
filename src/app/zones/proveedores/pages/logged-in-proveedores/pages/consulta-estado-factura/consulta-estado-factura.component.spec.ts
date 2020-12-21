import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEstadoFacturaComponent } from './consulta-estado-factura.component';

describe('ConsultaEstadoFacturaComponent', () => {
  let component: ConsultaEstadoFacturaComponent;
  let fixture: ComponentFixture<ConsultaEstadoFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEstadoFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEstadoFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
