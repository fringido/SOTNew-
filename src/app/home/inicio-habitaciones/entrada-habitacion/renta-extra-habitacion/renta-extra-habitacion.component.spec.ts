import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaExtraHabitacionComponent } from './renta-extra-habitacion.component';

describe('RentaExtraHabitacionComponent', () => {
  let component: RentaExtraHabitacionComponent;
  let fixture: ComponentFixture<RentaExtraHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaExtraHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentaExtraHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
