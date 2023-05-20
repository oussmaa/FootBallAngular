import { TestBed } from '@angular/core/testing';

import { SystemJeuxService } from './system-jeux.service';

describe('SystemJeuxService', () => {
  let service: SystemJeuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemJeuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
