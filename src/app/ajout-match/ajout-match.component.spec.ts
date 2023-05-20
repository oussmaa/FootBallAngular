import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMatchComponent } from './ajout-match.component';

describe('AjoutMatchComponent', () => {
  let component: AjoutMatchComponent;
  let fixture: ComponentFixture<AjoutMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
