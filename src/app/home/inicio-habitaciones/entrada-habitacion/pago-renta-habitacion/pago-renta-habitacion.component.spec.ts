import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoRentaHabitacionComponent } from './pago-renta-habitacion.component';

describe('PagoRentaHabitacionComponent', () => {
  let component: PagoRentaHabitacionComponent;
  let fixture: ComponentFixture<PagoRentaHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoRentaHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoRentaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
