import { TestBed, inject } from '@angular/core/testing';

import { BioEventosEspecialesService } from './bio-eventos-especiales.service';

describe('BioEventosEspecialesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BioEventosEspecialesService]
    });
  });

  it('should be created', inject([BioEventosEspecialesService], (service: BioEventosEspecialesService) => {
    expect(service).toBeTruthy();
  }));
});
