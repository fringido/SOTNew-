import { AbstractControl } from '@angular/forms';

export class controlHabitacion {
  static extrasControl(control: AbstractControl){
    const persona = control.get('personaExtra')?.value
    const hospedaje = control.get('hospedaje')?.value
    const horas = control.get('horasExtra')?.value

    let suma = persona + hospedaje + horas

    if (suma == 0) {
      return{extras_invalid: true}
    }
    return null
  }
}
