import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarHabitacionComponent } from './cancelar-habitacion.component';

describe('CancelarHabitacionComponent', () => {
  let component: CancelarHabitacionComponent;
  let fixture: ComponentFixture<CancelarHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
