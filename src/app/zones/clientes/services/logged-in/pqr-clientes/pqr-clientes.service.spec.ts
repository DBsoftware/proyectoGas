import { TestBed, inject } from '@angular/core/testing';

import { PqrClientesService } from './pqr-clientes.service';

describe('PqrClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PqrClientesService]
    });
  });

  it('should be created', inject([PqrClientesService], (service: PqrClientesService) => {
    expect(service).toBeTruthy();
  }));
});
