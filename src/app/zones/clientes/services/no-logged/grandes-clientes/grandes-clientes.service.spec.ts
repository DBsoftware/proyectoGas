import { TestBed, inject } from '@angular/core/testing';

import { GrandesClientesService } from './grandes-clientes.service';

describe('GrandesClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrandesClientesService]
    });
  });

  it('should be created', inject([GrandesClientesService], (service: GrandesClientesService) => {
    expect(service).toBeTruthy();
  }));
});
