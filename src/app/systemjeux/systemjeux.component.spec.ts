import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemjeuxComponent } from './systemjeux.component';

describe('SystemjeuxComponent', () => {
  let component: SystemjeuxComponent;
  let fixture: ComponentFixture<SystemjeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemjeuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemjeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
