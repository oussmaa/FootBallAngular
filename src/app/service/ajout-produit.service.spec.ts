import { TestBed } from '@angular/core/testing';

import { AjoutProduitService } from './ajout-produit.service';

describe('AjoutProduitService', () => {
  let service: AjoutProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
