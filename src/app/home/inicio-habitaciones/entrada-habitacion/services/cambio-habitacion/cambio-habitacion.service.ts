import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CambioHabitacionService {

  private cambioHabitacionConfirmado = new Subject<boolean>();
  cambioHabitacionConfirmado$ = this.cambioHabitacionConfirmado.asObservable();

  constructor() { }

  confirmCambioHab() {
    this.cambioHabitacionConfirmado.next(true);
  }

}
