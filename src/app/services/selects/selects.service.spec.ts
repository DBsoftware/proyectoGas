import { TestBed, inject } from '@angular/core/testing';

import { SelectsService } from './selects.service';

describe('SelectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectsService]
    });
  });

  it('should be created', inject([SelectsService], (service: SelectsService) => {
    expect(service).toBeTruthy();
  }));
});
