import { TestBed, inject } from '@angular/core/testing';

import { VentasSolicitudCetificadoClientesService } from './ventas-solicitud-cetificado-clientes.service';

describe('VentasSolicitudCetificadoClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VentasSolicitudCetificadoClientesService]
    });
  });

  it('should be created', inject([VentasSolicitudCetificadoClientesService], (service: VentasSolicitudCetificadoClientesService) => {
    expect(service).toBeTruthy();
  }));
});
