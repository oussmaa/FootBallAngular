import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLigueComponent } from './ajout-ligue.component';

describe('AjoutLigueComponent', () => {
  let component: AjoutLigueComponent;
  let fixture: ComponentFixture<AjoutLigueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutLigueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutLigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
