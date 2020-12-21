import { TestBed, inject } from '@angular/core/testing';

import { BioJardineriaService } from './bio-jardineria.service';

describe('BioJardineriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BioJardineriaService]
    });
  });

  it('should be created', inject([BioJardineriaService], (service: BioJardineriaService) => {
    expect(service).toBeTruthy();
  }));
});
