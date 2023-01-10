import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { take, tap } from 'rxjs';

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
  query getHabitacion ($id: ID!){
    habitacion(id: $id){
      numeroHabitacion

      tipoHabitacion{
        id
        clave
        descripcion
      }
    }
  }
`

@Injectable({
  providedIn: 'root'
})
export class ObtenerHabitacionesService {

  constructor(
    private apollo: Apollo
  ) { }

  getHabitaciones() {
    this.apollo.watchQuery<any>({
      query: GET_HABITAICONES
    }).valueChanges.pipe(
      take(1),
      tap(res => {
        console.log(res);
      })
    ).subscribe();
  }


  getHabitacio(id:string){
    this.apollo.watchQuery<any>({
      query: GET_HABITACION,
      variables:{
        id: id
      }
    }).valueChanges.pipe(
      take(1),
      tap(res => {
        console.log(res);
      })
    ).subscribe();
  }
}


