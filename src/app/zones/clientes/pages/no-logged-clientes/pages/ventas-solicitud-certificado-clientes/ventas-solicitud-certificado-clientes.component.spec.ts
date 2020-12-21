import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasSolicitudCertificadoClientesComponent } from './ventas-solicitud-certificado-clientes.component';

describe('VentasSolicitudCertificadoClientesComponent', () => {
  let component: VentasSolicitudCertificadoClientesComponent;
  let fixture: ComponentFixture<VentasSolicitudCertificadoClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasSolicitudCertificadoClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasSolicitudCertificadoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
