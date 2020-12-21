import { TestBed, inject } from '@angular/core/testing';

import { ConsultaAvisosClientesService } from './consulta-avisos-clientes.service';

describe('ConsultaAvisosClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaAvisosClientesService]
    });
  });

  it('should be created', inject([ConsultaAvisosClientesService], (service: ConsultaAvisosClientesService) => {
    expect(service).toBeTruthy();
  }));
});
