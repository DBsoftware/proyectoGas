import { TestBed, inject } from '@angular/core/testing';

import { ConvocatoriasProveedoresService } from './convocatorias-proveedores.service';

describe('ConvocatoriasProveedoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvocatoriasProveedoresService]
    });
  });

  it('should be created', inject([ConvocatoriasProveedoresService], (service: ConvocatoriasProveedoresService) => {
    expect(service).toBeTruthy();
  }));
});
