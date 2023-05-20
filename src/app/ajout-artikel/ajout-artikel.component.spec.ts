import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutArtikelComponent } from './ajout-artikel.component';

describe('AjoutArtikelComponent', () => {
  let component: AjoutArtikelComponent;
  let fixture: ComponentFixture<AjoutArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutArtikelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
