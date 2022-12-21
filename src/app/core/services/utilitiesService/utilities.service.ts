import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  /**
   * Añade una función síncrona a la cola de mensajes en el event loop, útil Cuando se emite un valor a un observable, se ejecuta el método en el suscriptor y después de esa ejecución correr algo más (este @callback)
   * @example
   * () => {
   *  EjemploSubject.emitirValor(dato);
   * //Se ejecutará despues de que el suscriptor de EjemploSubject finalice su next()
   *  utilitiesService.createTask(funcionDependienteDeEjemploSubject)
   * }
   * @param {function}  callback - funcion a encolar.
 */
  createTask(callback: () => void) {
    return setTimeout(callback, 0);
  }
}
