import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguesaMenuComponent } from './hamburguesa-menu.component';

describe('HamburguesaMenuComponent', () => {
  let component: HamburguesaMenuComponent;
  let fixture: ComponentFixture<HamburguesaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburguesaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburguesaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
