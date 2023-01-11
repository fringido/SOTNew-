/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComunicacionPagoService } from './comunicacionPago.service';

describe('Service: ComunicacionPago', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComunicacionPagoService]
    });
  });

  it('should ...', inject([ComunicacionPagoService], (service: ComunicacionPagoService) => {
    expect(service).toBeTruthy();
  }));
});
