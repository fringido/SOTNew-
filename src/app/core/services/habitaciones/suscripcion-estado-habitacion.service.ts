import { Injectable, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';

const fakeQuery = gql`query{fake}`;

const GET_HABITAICONES_SUSCRIBE = gql`
  subscription SubscriptionHabitaciones{
  checkHabitaciones{
    estadoHabitacion {
      nombre
    }
    usuarioRevision {
      id
      nombre
    }
    id
    numeroHabitacion
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class SuscripcionEstadoHabitacionService implements OnInit {

  queryRef!: QueryRef<any>;

  habitaciones: any;

  constructor(
    private apollo: Apollo
  ) {
    this.queryRef = this.apollo.watchQuery<any>({
      query: fakeQuery
    })
  }

  ngOnInit(): void {
    this.getHabitacionesSuscri();
  }

  getHabitacionesSuscri(){
    this.queryRef.subscribeToMore({
      document: GET_HABITAICONES_SUSCRIBE,
      updateQuery:(prev,{subscriptionData}) => {
        this.habitaciones = subscriptionData.data
      }
    })
    console.log(this.habitaciones)
  }

  // getHabitacionesSuscri() {
  //   this.apollo.watchQuery({
  //     query: GET_HABITAICONES_SUSCRIBE
  //   }).valueChanges.pipe(
  //     take(1),
  //     tap(({ data }) => {
  //       const { habitaciones }: any = data
  //       this.habitaciones = habitaciones
  //       console.log(this.habitaciones)
  //     })
  //   ).subscribe()
  //   }
}
