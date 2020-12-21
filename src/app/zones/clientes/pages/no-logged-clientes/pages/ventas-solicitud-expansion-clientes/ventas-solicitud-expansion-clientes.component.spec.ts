import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasSolicitudExpansionClientesComponent } from './ventas-solicitud-expansion-clientes.component';

describe('VentasSolicitudExpansionClientesComponent', () => {
  let component: VentasSolicitudExpansionClientesComponent;
  let fixture: ComponentFixture<VentasSolicitudExpansionClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasSolicitudExpansionClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasSolicitudExpansionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
