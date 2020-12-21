import { TestBed, inject } from '@angular/core/testing';

import { EnvioFacturaMedioCorreoClientesService } from './envio-factura-medio-correo-clientes.service';

describe('EnvioFacturaMedioCorreoClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvioFacturaMedioCorreoClientesService]
    });
  });

  it('should be created', inject([EnvioFacturaMedioCorreoClientesService], (service: EnvioFacturaMedioCorreoClientesService) => {
    expect(service).toBeTruthy();
  }));
});
