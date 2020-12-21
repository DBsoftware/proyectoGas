import { TestBed, inject } from '@angular/core/testing';

import { GnvUbicacionEstacionesService } from './gnv-ubicacion-estaciones.service';

describe('GnvUbicacionEstacionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GnvUbicacionEstacionesService]
    });
  });

  it('should be created', inject([GnvUbicacionEstacionesService], (service: GnvUbicacionEstacionesService) => {
    expect(service).toBeTruthy();
  }));
});
