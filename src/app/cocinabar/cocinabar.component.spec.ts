import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinabarComponent } from './cocinabar.component';

describe('CocinabarComponent', () => {
  let component: CocinabarComponent;
  let fixture: ComponentFixture<CocinabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocinabarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocinabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
