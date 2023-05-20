import { TestBed } from '@angular/core/testing';

import { AjoutCategorieService } from './ajout-categorie.service';

describe('AjoutCategorieService', () => {
  let service: AjoutCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
