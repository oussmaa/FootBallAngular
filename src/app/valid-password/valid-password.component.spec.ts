import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidPasswordComponent } from './valid-password.component';

describe('ValidPasswordComponent', () => {
  let component: ValidPasswordComponent;
  let fixture: ComponentFixture<ValidPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
