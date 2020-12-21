import { TestBed, inject } from '@angular/core/testing';

import { LineaEticaClientesService } from './linea-etica-clientes.service';

describe('LineaEticaClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineaEticaClientesService]
    });
  });

  it('should be created', inject([LineaEticaClientesService], (service: LineaEticaClientesService) => {
    expect(service).toBeTruthy();
  }));
});
