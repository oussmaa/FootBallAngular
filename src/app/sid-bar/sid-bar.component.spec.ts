import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidBarComponent } from './sid-bar.component';

describe('SidBarComponent', () => {
  let component: SidBarComponent;
  let fixture: ComponentFixture<SidBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
