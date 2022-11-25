import { Injectable } from '@angular/core';
import { iif, of, Observable } from 'rxjs';

@Injectable()
export class CocinabarService {

  constructor() { }

  // obtenerDatosCocina u obtenerDatosBar dependiendo de la ruta elegida
  getCocinaBarData(filter: 'cocina' | 'bar'): Observable<string> {
    return iif(
      () => filter === 'cocina',
      of('first'),
      of('second')
    );
  }
}
