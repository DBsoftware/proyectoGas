import { TestBed, inject } from '@angular/core/testing';

import { RecaudadoresClientesService } from './recaudadores-clientes.service';

describe('RecaudadoresClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecaudadoresClientesService]
    });
  });

  it('should be created', inject([RecaudadoresClientesService], (service: RecaudadoresClientesService) => {
    expect(service).toBeTruthy();
  }));
});
