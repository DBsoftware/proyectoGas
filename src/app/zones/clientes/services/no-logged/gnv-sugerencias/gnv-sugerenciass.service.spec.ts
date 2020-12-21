import { TestBed, inject } from '@angular/core/testing';

import { GnvSugerenciassService } from './gnv-sugerenciass.service';

describe('GnvSugerenciassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GnvSugerenciassService]
    });
  });

  it('should be created', inject([GnvSugerenciassService], (service: GnvSugerenciassService) => {
    expect(service).toBeTruthy();
  }));
});
