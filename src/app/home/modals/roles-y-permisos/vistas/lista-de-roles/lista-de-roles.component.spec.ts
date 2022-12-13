import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeRolesComponent } from './lista-de-roles.component';

describe('ListaDeRolesComponent', () => {
  let component: ListaDeRolesComponent;
  let fixture: ComponentFixture<ListaDeRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
