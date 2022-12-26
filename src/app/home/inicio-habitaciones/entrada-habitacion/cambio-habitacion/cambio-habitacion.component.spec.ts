import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioHabitacionComponent } from './cambio-habitacion.component';

describe('CambioHabitacionComponent', () => {
  let component: CambioHabitacionComponent;
  let fixture: ComponentFixture<CambioHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambioHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
