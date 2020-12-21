import { TestBed, inject } from '@angular/core/testing';

import { AdmLineaEticaService } from './adm-linea-etica.service';

describe('AdmLineaEticaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmLineaEticaService]
    });
  });

  it('should be created', inject([AdmLineaEticaService], (service: AdmLineaEticaService) => {
    expect(service).toBeTruthy();
  }));
});
