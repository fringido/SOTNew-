import { AbstractControl } from '@angular/forms';

export class controlFormMixto {

  static isNotCero(control: AbstractControl) {
    const value = control.value;
    if (value === 0) {
      return {cero_invalid: true};
    }
    return null;
  }

  static totalValidator(control: AbstractControl) {
    const totalPagar = control.get('totalPagar')?.value
    const mixto = control.get('mixto')?.value
    let suma = 0
    for (let i = 0; i < mixto.length; i++) {
      const element = mixto[i].importe;
      suma = suma + element
    }

    if (totalPagar == suma) {
      return null;
    }
    return {total_invalid: true};
  }


}
