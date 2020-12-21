import { TestBed, inject } from '@angular/core/testing';

import { VentasHogaresClientesService } from './ventas-hogares-clientes.service';

describe('VentasHogaresClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VentasHogaresClientesService]
    });
  });

  it('should be created', inject([VentasHogaresClientesService], (service: VentasHogaresClientesService) => {
    expect(service).toBeTruthy();
  }));
});
