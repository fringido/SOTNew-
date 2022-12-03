import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaHabitacionComponent } from './renta-habitacion.component';

describe('RentaHabitacionComponent', () => {
  let component: RentaHabitacionComponent;
  let fixture: ComponentFixture<RentaHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
