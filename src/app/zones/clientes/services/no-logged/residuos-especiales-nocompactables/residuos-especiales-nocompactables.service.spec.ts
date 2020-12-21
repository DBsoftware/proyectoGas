import { TestBed, inject } from '@angular/core/testing';

import { ResiduosEspecialesNocompactablesService } from './residuos-especiales-nocompactables.service';

describe('ResiduosEspecialesNocompactablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResiduosEspecialesNocompactablesService]
    });
  });

  it('should be created', inject([ResiduosEspecialesNocompactablesService], (service: ResiduosEspecialesNocompactablesService) => {
    expect(service).toBeTruthy();
  }));
});
