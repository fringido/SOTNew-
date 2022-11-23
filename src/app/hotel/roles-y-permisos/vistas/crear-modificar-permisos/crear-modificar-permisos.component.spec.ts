import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModificarPermisosComponent } from './crear-modificar-permisos.component';

describe('CrearModificarPermisosComponent', () => {
  let component: CrearModificarPermisosComponent;
  let fixture: ComponentFixture<CrearModificarPermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearModificarPermisosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearModificarPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
