import { TestBed } from '@angular/core/testing';

import { GetGifsService } from './get-gifs.service';

describe('GetGifsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetGifsService = TestBed.get(GetGifsService);
    expect(service).toBeTruthy();
  });
});
