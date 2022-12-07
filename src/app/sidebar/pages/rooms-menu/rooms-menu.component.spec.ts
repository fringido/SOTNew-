import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsMenuComponent } from './rooms-menu.component';

describe('RoomsMenuComponent', () => {
  let component: RoomsMenuComponent;
  let fixture: ComponentFixture<RoomsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
