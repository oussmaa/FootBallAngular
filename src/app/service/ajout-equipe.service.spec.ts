import { TestBed } from '@angular/core/testing';

import { AjoutEquipeService } from './ajout-equipe.service';

describe('AjoutEquipeService', () => {
  let service: AjoutEquipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutEquipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
