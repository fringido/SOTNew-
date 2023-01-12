import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { BehaviorSubject, take, tap } from 'rxjs';

const GET_HABITAICONES = gql`
  query {
    habitaciones {
      id
      numeroHabitacion
      piso
      estadoHabitacion {
        nombre
      }
    }
  }
`;

const GET_HABITACION = gql`
  query Habitacion($num:String!){
  habitacion(id_o_numero: $num) {
    id
    numeroHabitacion
    tipoHabitacion {
      id
      nombre
    }
  }
}
`

@Injectable({
  providedIn: 'root'
})
export class ObtenerHabitacionesService {

  private habitacionSubjext = new BehaviorSubject<any[]>([null])
  habitacion$ = this.habitacionSubjext.asObservable();

  constructor(
    private apollo: Apollo
  ) { }

  getHabitacio(id:string){
    this.apollo.watchQuery({
      query: GET_HABITACION,
      variables:{
        num:id
      }
    }).valueChanges.pipe(
      take(1),
      tap(({ data }) => {
        const { habitacion }: any = data
        this.habitacionSubjext.next(habitacion)
      })
    ).subscribe()

  }
}


