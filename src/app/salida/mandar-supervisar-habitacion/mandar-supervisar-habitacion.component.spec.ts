import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandarSupervisarHabitacionComponent } from './mandar-supervisar-habitacion.component';

describe('MandarSupervisarHabitacionComponent', () => {
  let component: MandarSupervisarHabitacionComponent;
  let fixture: ComponentFixture<MandarSupervisarHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandarSupervisarHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandarSupervisarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
