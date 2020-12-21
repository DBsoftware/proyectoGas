import { TestBed, inject } from '@angular/core/testing';

import { BioDispocisionResiduosConstruccionService } from './bio-dispocision-residuos-construccion.service';

describe('BioDispocisionResiduosConstruccionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BioDispocisionResiduosConstruccionService]
    });
  });

  it('should be created', inject([BioDispocisionResiduosConstruccionService], (service: BioDispocisionResiduosConstruccionService) => {
    expect(service).toBeTruthy();
  }));
});
