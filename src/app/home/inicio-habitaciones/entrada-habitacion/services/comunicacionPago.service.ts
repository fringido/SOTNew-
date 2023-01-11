import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionPagoService {

constructor() { }

  pago$!:number
  infoPago$!: Form
}
