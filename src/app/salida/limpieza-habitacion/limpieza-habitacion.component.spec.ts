import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezaHabitacionComponent } from './limpieza-habitacion.component';

describe('LimpiezaHabitacionComponent', () => {
  let component: LimpiezaHabitacionComponent;
  let fixture: ComponentFixture<LimpiezaHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimpiezaHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimpiezaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
