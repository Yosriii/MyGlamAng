import { TestBed } from '@angular/core/testing';

import { CardDataService } from './card-data.service';

describe('CarfDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardDataService = TestBed.get(CardDataService);
    expect(service).toBeTruthy();
  });
});
