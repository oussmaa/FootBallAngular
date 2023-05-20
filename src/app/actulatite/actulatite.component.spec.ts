import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActulatiteComponent } from './actulatite.component';

describe('ActulatiteComponent', () => {
  let component: ActulatiteComponent;
  let fixture: ComponentFixture<ActulatiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActulatiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActulatiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
