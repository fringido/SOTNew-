import { Injectable } from '@angular/core';
import { Subscription, gql } from 'apollo-angular'


@Injectable({
  providedIn: 'root'
})
export class SuscripcionEstadoHabitacionService extends Subscription {
  documents = gql`
  subscription  checkHabitaciones {
    checkHabitaciones{
      habitacion{
        estadoHabitacion
        id
        numeroHabitacion
      }
    }
  }
`
}
