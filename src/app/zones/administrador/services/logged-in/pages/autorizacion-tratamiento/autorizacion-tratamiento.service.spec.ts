import { TestBed, inject } from '@angular/core/testing';

import { AutorizacionTratamientoService } from './autorizacion-tratamiento.service';

describe('AutorizacionTratamientoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutorizacionTratamientoService]
    });
  });

  it('should be created', inject([AutorizacionTratamientoService], (service: AutorizacionTratamientoService) => {
    expect(service).toBeTruthy();
  }));
});
