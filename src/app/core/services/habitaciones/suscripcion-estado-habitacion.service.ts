import { Injectable, OnInit } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { BehaviorSubject, take, tap } from 'rxjs';

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

const GET_HABITAICONES = gql`
  query {
  habitaciones{
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

  private habitacionesSubjex = new BehaviorSubject<any[]>([null])
  habitaciones$ = this.habitacionesSubjex.asObservable();

  habitacionesWs:any
  habitacionesGQL:any

  constructor(
    private apollo: Apollo
  ) {
    this.queryRef = this.apollo.watchQuery<any>({
      query: fakeQuery
    })
  }

  ngOnInit(): void {
    this.getHabitaciones();
    this.getHabitacionesSuscri();
    this.cambioSw()
  }

  getHabitacionesSuscri(){
    this.queryRef.subscribeToMore({
      document: GET_HABITAICONES_SUSCRIBE,
      updateQuery:(prev,{subscriptionData}:any) => {
        this.habitacionesWs = subscriptionData.data.checkHabitaciones

      },
    })
    console.log(this.habitacionesWs,'WS')
  }

  getHabitaciones() {
    this.apollo.watchQuery({
      query: GET_HABITAICONES
    }).valueChanges.pipe(
      take(1),
      tap(({ data }) => {
        const { habitaciones }: any = data
        this.habitacionesGQL = habitaciones
        console.log(this.habitacionesGQL,'gql')
      })
    ).subscribe()
  }

  cambioSw(){
    if (this.habitacionesWs == undefined){
      this.habitacionesSubjex.next(this.habitacionesWs)
    }
    else{
      this.habitacionesSubjex.next(this.habitacionesGQL)
    }
  }
}
