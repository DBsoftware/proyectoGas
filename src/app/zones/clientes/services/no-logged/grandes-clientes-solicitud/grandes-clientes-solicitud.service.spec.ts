import { TestBed, inject } from '@angular/core/testing';

import { GrandesClientesSolicitudService } from './grandes-clientes-solicitud.service';

describe('GrandesClientesSolicitudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrandesClientesSolicitudService]
    });
  });

  it('should be created', inject([GrandesClientesSolicitudService], (service: GrandesClientesSolicitudService) => {
    expect(service).toBeTruthy();
  }));
});
