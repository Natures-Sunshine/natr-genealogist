import { TestBed } from '@angular/core/testing';

import { GenealogistService } from './genealogist.service';

describe('GenealogistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenealogistService = TestBed.get(GenealogistService);
    expect(service).toBeTruthy();
  });
});
