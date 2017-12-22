import { TestBed, inject } from '@angular/core/testing';

import { NeymoDataService } from './neymo-data.service';

describe('NeymoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NeymoDataService]
    });
  });

  it('should be created', inject([NeymoDataService], (service: NeymoDataService) => {
    expect(service).toBeTruthy();
  }));
});
