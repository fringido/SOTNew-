import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoComandasComponent } from './pago-comandas.component';

describe('PagoComandasComponent', () => {
  let component: PagoComandasComponent;
  let fixture: ComponentFixture<PagoComandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoComandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoComandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
