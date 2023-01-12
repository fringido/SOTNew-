import { Injectable } from '@angular/core';
import { gql, Apollo } from 'apollo-angular';

const CambiarEstadoDocument = gql`
    mutation CambiarEstado($id: ID!, $estado: ValidEstadosHabitaciones!) {
  cambiar_estado(id: $id, estado: $estado)
}
    `;

@Injectable({
  providedIn: 'root'
})

export class MutarEstadoHabitacionService {

  constructor(
    private apollo:Apollo
  ) { }

  cambiarEstado(id:string,estado:string){
    this.apollo
      .mutate({
        mutation: CambiarEstadoDocument,
        variables: {
          id: id,
          estado: estado
        }
      })
      .subscribe(
        ({ data }:any):any => {
          console.log('got data', data)
        },
        (error: any) => {
          console.log('there was an error sending the query', error)
        }
      )
  }


}
