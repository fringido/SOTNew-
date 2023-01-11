import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaristasEnTurnoComponent } from './camaristas-en-turno.component';

describe('CamaristasEnTurnoComponent', () => {
  let component: CamaristasEnTurnoComponent;
  let fixture: ComponentFixture<CamaristasEnTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamaristasEnTurnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamaristasEnTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
