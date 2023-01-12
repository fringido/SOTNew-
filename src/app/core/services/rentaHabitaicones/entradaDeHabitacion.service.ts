import { Injectable } from '@angular/core';
import { gql, Apollo } from 'apollo-angular';
import { CreateRentaInput } from '../../graphQL/serviciosGraph';



const EntradaHabitacion = gql`
    mutation crear_renta( $renta: CreateRentaInput!) {
  crear_renta(createRentaInput:$renta)
}
    `;

@Injectable({
  providedIn: 'root'
})
export class EntradaDeHabitacionService {

constructor(
  private apollo: Apollo

) { }

  entradaHabitacion(renta: CreateRentaInput) {
    this.apollo
      .mutate({
        mutation: EntradaHabitacion,
        variables: {
          renta
        }
      })
      .subscribe(
        ({ data }: any): any => {
          console.log('Renta lista')
        },
        (error: any) => {
          console.log('there was an error sending the query', error)
        }
      )
  }

}
