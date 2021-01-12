import { TestBed } from '@angular/core/testing';

import { SungkaService } from './sungka.service';

describe('SungkaService', () => {
  let service: SungkaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SungkaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
