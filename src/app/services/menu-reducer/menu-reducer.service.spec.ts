import { TestBed, inject } from '@angular/core/testing';

import { MenuReducerService } from './menu-reducer.service';

describe('MenuReducerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuReducerService]
    });
  });

  it('should be created', inject([MenuReducerService], (service: MenuReducerService) => {
    expect(service).toBeTruthy();
  }));
});
