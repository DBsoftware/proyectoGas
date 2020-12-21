import { TestBed, inject } from '@angular/core/testing';

import { VentasComerciosService } from './ventas-comercios.service';

describe('VentasComerciosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VentasComerciosService]
    });
  });

  it('should be created', inject([VentasComerciosService], (service: VentasComerciosService) => {
    expect(service).toBeTruthy();
  }));
});
