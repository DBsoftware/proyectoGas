import { TestBed, inject } from '@angular/core/testing';

import { ActiveAccountProveedoresService } from './active-account-proveedores.service';

describe('ActiveAccountProveedoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveAccountProveedoresService]
    });
  });

  it('should be created', inject([ActiveAccountProveedoresService], (service: ActiveAccountProveedoresService) => {
    expect(service).toBeTruthy();
  }));
});
