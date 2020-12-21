import { TestBed, inject } from '@angular/core/testing';

import { FormularioContactoService } from './formulario-contacto.service';

describe('FormularioContactoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormularioContactoService]
    });
  });

  it('should be created', inject([FormularioContactoService], (service: FormularioContactoService) => {
    expect(service).toBeTruthy();
  }));
});
