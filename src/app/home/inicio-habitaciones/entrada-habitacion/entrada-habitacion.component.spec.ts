import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaHabitacionComponent } from './entrada-habitacion.component';

describe('EntradaHabitacionComponent', () => {
  let component: EntradaHabitacionComponent;
  let fixture: ComponentFixture<EntradaHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaHabitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
