import { TestBed, inject } from '@angular/core/testing';

import { ClientesRegistroService } from './clientes-registro.service';

describe('ClientesRegistroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientesRegistroService]
    });
  });

  it('should be created', inject([ClientesRegistroService], (service: ClientesRegistroService) => {
    expect(service).toBeTruthy();
  }));
});
