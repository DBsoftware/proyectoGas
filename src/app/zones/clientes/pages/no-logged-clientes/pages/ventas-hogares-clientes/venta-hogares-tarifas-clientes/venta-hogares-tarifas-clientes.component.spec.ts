import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaHogaresTarifasClientesComponent } from './venta-hogares-tarifas-clientes.component';

describe('VentaHogaresTarifasClientesComponent', () => {
  let component: VentaHogaresTarifasClientesComponent;
  let fixture: ComponentFixture<VentaHogaresTarifasClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaHogaresTarifasClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaHogaresTarifasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
