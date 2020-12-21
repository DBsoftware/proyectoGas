import { TestBed, inject } from '@angular/core/testing';

import { MapCentroAtencionService } from './map-centro-atencion.service';

describe('MapCentroAtencionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapCentroAtencionService]
    });
  });

  it('should be created', inject([MapCentroAtencionService], (service: MapCentroAtencionService) => {
    expect(service).toBeTruthy();
  }));
});
