import { TestBed, inject } from '@angular/core/testing';

import { CertificadosRetencionService } from './certificados-retencion.service';

describe('CertificadosRetencionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CertificadosRetencionService]
    });
  });

  it('should be created', inject([CertificadosRetencionService], (service: CertificadosRetencionService) => {
    expect(service).toBeTruthy();
  }));
});
