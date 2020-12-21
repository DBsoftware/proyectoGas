import { TestBed, inject } from '@angular/core/testing';

import { VentasConstructorasClientesService } from './ventas-constructoras-clientes.service';

describe('VentasConstructorasClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VentasConstructorasClientesService]
    });
  });

  it('should be created', inject([VentasConstructorasClientesService], (service: VentasConstructorasClientesService) => {
    expect(service).toBeTruthy();
  }));
});
