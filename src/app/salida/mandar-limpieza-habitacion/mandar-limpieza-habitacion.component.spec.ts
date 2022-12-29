import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandarLimpiezaHabitacionComponent } from './mandar-limpieza-habitacion.component';

describe('MandarLimpiezaHabitacionComponent', () => {
  let component: MandarLimpiezaHabitacionComponent;
  let fixture: ComponentFixture<MandarLimpiezaHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandarLimpiezaHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandarLimpiezaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
