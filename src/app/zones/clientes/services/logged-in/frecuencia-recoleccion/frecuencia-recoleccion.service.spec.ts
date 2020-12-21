import { TestBed, inject } from '@angular/core/testing';

import { FrecuenciaRecoleccionService } from './frecuencia-recoleccion.service';

describe('FrecuenciaRecoleccionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrecuenciaRecoleccionService]
    });
  });

  it('should be created', inject([FrecuenciaRecoleccionService], (service: FrecuenciaRecoleccionService) => {
    expect(service).toBeTruthy();
  }));
});
