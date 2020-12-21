import { TestBed, inject } from '@angular/core/testing';

import { FirmasInstaladorasService } from './firmas-instaladoras.service';

describe('FirmasInstaladorasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirmasInstaladorasService]
    });
  });

  it('should be created', inject([FirmasInstaladorasService], (service: FirmasInstaladorasService) => {
    expect(service).toBeTruthy();
  }));
});
