import { TestBed, inject } from '@angular/core/testing';

import { RegisterColaboradoresService } from './register-colaboradores.service';

describe('RegisterColaboradoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterColaboradoresService]
    });
  });

  it('should be created', inject([RegisterColaboradoresService], (service: RegisterColaboradoresService) => {
    expect(service).toBeTruthy();
  }));
});
