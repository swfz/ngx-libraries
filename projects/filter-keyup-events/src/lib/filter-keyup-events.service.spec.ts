import { TestBed } from '@angular/core/testing';

import { FilterKeyupEventsService } from './filter-keyup-events.service';

describe('FilterKeyupEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterKeyupEventsService = TestBed.get(FilterKeyupEventsService);
    expect(service).toBeTruthy();
  });
});
