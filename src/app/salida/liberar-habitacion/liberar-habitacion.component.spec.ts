import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberarHabitacionComponent } from './liberar-habitacion.component';

describe('LiberarHabitacionComponent', () => {
  let component: LiberarHabitacionComponent;
  let fixture: ComponentFixture<LiberarHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiberarHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiberarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
