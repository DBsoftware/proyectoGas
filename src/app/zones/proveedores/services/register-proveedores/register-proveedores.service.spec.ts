import { TestBed, inject } from '@angular/core/testing';

import { RegisterProveedoresService } from './register-proveedores.service';

describe('RegisterProveedoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterProveedoresService]
    });
  });

  it('should be created', inject([RegisterProveedoresService], (service: RegisterProveedoresService) => {
    expect(service).toBeTruthy();
  }));
});
