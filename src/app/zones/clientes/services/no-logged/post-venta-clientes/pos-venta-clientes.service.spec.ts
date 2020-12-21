import { TestBed, inject } from '@angular/core/testing';

import { PosVentaClientesService } from './pos-venta-clientes.service';

describe('PosVentaClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosVentaClientesService]
    });
  });

  it('should be created', inject([PosVentaClientesService], (service: PosVentaClientesService) => {
    expect(service).toBeTruthy();
  }));
});
