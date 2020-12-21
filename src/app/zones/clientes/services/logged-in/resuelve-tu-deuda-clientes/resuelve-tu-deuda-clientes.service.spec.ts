import { TestBed, inject } from '@angular/core/testing';

import { ResuelveTuDeudaClientesService } from './resuelve-tu-deuda-clientes.service';

describe('ResuelveTuDeudaClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResuelveTuDeudaClientesService]
    });
  });

  it('should be created', inject([ResuelveTuDeudaClientesService], (service: ResuelveTuDeudaClientesService) => {
    expect(service).toBeTruthy();
  }));
});
