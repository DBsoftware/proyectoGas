import { TestBed, inject } from '@angular/core/testing';

import { EvaluacionDesempenoProveedoresService } from './evaluacion-desempeno-proveedores.service';

describe('EvaluacionDesempenoProveedoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvaluacionDesempenoProveedoresService]
    });
  });

  it('should be created', inject([EvaluacionDesempenoProveedoresService], (service: EvaluacionDesempenoProveedoresService) => {
    expect(service).toBeTruthy();
  }));
});
