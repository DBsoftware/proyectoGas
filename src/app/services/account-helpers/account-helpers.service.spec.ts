import { TestBed, inject } from '@angular/core/testing';

import { AccountHelpersService } from './account-helpers.service';

describe('AccountHelpersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountHelpersService]
    });
  });

  it('should be created', inject([AccountHelpersService], (service: AccountHelpersService) => {
    expect(service).toBeTruthy();
  }));
});
