import { TestBed, inject } from '@angular/core/testing';

import { DispocisionService } from './dispocision.service';

describe('DispocisionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DispocisionService]
    });
  });

  it('should be created', inject([DispocisionService], (service: DispocisionService) => {
    expect(service).toBeTruthy();
  }));
});
