import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberarPagarRoomServiceComponent } from './liberar-pagar-room-service.component';

describe('LiberarPagarRoomServiceComponent', () => {
  let component: LiberarPagarRoomServiceComponent;
  let fixture: ComponentFixture<LiberarPagarRoomServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiberarPagarRoomServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiberarPagarRoomServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
