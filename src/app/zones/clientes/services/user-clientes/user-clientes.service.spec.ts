import { TestBed, inject } from '@angular/core/testing';

import { UserClientesService } from './user-clientes.service';

describe('UserClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserClientesService]
    });
  });

  it('should be created', inject([UserClientesService], (service: UserClientesService) => {
    expect(service).toBeTruthy();
  }));
});
