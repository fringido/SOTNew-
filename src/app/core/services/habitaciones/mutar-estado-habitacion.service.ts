import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';

const UPVOTE_ESTADO_HABITACION = gql`
  mutation UpEstadoHabitacion($id, $estado_habitacion)  {
    upvotePost(id: $id, estado:$estado_habitacion)
  }
`

@Injectable({
  providedIn: 'root'
})

export class MutarEstadoHabitacionService {

  constructor() { }
}
