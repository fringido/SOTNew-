import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentReservacionComponent } from './component-reservacion.component';

describe('ComponentReservacionComponent', () => {
  let component: ComponentReservacionComponent;
  let fixture: ComponentFixture<ComponentReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentReservacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
