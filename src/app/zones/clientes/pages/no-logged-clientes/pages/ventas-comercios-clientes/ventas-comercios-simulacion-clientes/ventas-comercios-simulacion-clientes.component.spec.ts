import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasComerciosSimulacionClientesComponent } from './ventas-comercios-simulacion-clientes.component';

describe('VentasComerciosSimulacionClientesComponent', () => {
  let component: VentasComerciosSimulacionClientesComponent;
  let fixture: ComponentFixture<VentasComerciosSimulacionClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasComerciosSimulacionClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasComerciosSimulacionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
