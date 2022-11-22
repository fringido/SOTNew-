import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CocinabarComponent } from './cocinabar.component';
import { CocinabarService } from './services/cocinabar/cocinabar.service';

describe('CocinabarComponent', () => {
  let component: CocinabarComponent;
  let fixture: ComponentFixture<CocinabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocinabarComponent ],
      providers: [
        CocinabarService,
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({path: 'cocina'})
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
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
