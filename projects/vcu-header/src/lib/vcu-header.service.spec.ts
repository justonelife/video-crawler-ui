import { TestBed } from '@angular/core/testing';

import { VcuHeaderService } from './vcu-header.service';

describe('VcuHeaderService', () => {
  let service: VcuHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VcuHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
