import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrarPendienteHabitacionComponent } from './cobrar-pendiente-habitacion.component';

describe('CobrarPendienteHabitacionComponent', () => {
  let component: CobrarPendienteHabitacionComponent;
  let fixture: ComponentFixture<CobrarPendienteHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobrarPendienteHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CobrarPendienteHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
