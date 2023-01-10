import { TestBed } from '@angular/core/testing';

import { SuscripcionEstadoHabitacionService } from './suscripcion-estado-habitacion.service';

describe('SuscripcionEstadoHabitacionService', () => {
  let service: SuscripcionEstadoHabitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuscripcionEstadoHabitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
