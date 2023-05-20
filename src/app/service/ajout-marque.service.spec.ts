import { TestBed } from '@angular/core/testing';

import { AjoutMarqueService } from './ajout-marque.service';

describe('AjoutMarqueService', () => {
  let service: AjoutMarqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutMarqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
