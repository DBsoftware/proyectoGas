import { TestBed, inject } from '@angular/core/testing';

import { ActiveAccountClientesService } from './active-account-clientes.service';

describe('ActiveAccountClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveAccountClientesService]
    });
  });

  it('should be created', inject([ActiveAccountClientesService], (service: ActiveAccountClientesService) => {
    expect(service).toBeTruthy();
  }));
});
