import { TestBed } from '@angular/core/testing';

import { CambioHabitacionService } from './cambio-habitacion.service';

describe('CambioHabitacionService', () => {
  let service: CambioHabitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambioHabitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
