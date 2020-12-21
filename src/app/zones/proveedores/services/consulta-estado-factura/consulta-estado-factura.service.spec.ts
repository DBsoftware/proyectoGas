import { TestBed, inject } from '@angular/core/testing';

import { ConsultaEstadoFacturaService } from './consulta-estado-factura.service';

describe('ConsultaEstadoFacturaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaEstadoFacturaService]
    });
  });

  it('should be created', inject([ConsultaEstadoFacturaService], (service: ConsultaEstadoFacturaService) => {
    expect(service).toBeTruthy();
  }));
});
