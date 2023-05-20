import { TestBed } from '@angular/core/testing';

import { AjoutLigueService } from './ajout-ligue.service';

describe('AjoutLigueService', () => {
  let service: AjoutLigueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutLigueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
