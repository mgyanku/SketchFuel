import { TestBed } from '@angular/core/testing';

import { HexcodeService } from './hexcode-service';

describe('HexcodeService', () => {
  let service: HexcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HexcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
