import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoMixtoComponent } from './pago-mixto.component';

describe('PagoMixtoComponent', () => {
  let component: PagoMixtoComponent;
  let fixture: ComponentFixture<PagoMixtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoMixtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoMixtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
