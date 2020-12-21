import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioFacturaMedioCorreoClientesComponent } from './envio-factura-medio-correo-clientes.component';

describe('EnvioFacturaMedioCorreoClientesComponent', () => {
  let component: EnvioFacturaMedioCorreoClientesComponent;
  let fixture: ComponentFixture<EnvioFacturaMedioCorreoClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioFacturaMedioCorreoClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioFacturaMedioCorreoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
