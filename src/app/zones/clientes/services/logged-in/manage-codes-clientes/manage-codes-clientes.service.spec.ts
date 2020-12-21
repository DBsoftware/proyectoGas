import { TestBed, inject } from '@angular/core/testing';

import { ManageCodesClientesService } from './manage-codes-clientes.service';

describe('ManageCodesClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageCodesClientesService]
    });
  });

  it('should be created', inject([ManageCodesClientesService], (service: ManageCodesClientesService) => {
    expect(service).toBeTruthy();
  }));
});
