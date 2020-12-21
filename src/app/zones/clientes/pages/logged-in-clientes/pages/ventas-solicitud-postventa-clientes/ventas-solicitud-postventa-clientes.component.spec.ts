import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasSolicitudPostventaClientesComponent } from './ventas-solicitud-postventa-clientes.component';

describe('VentasSolicitudPostventaClientesComponent', () => {
  let component: VentasSolicitudPostventaClientesComponent;
  let fixture: ComponentFixture<VentasSolicitudPostventaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasSolicitudPostventaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasSolicitudPostventaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
