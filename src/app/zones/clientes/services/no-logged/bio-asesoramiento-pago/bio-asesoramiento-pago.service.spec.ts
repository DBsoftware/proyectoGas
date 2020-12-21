import { TestBed, inject } from '@angular/core/testing';

import { BioAsesoramientoPagoService } from './bio-asesoramiento-pago.service';

describe('BioAsesoramientoPagoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BioAsesoramientoPagoService]
    });
  });

  it('should be created', inject([BioAsesoramientoPagoService], (service: BioAsesoramientoPagoService) => {
    expect(service).toBeTruthy();
  }));
});
