import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { take, tap, BehaviorSubject } from 'rxjs';
const GET_TARIFAS = gql`
  query {
  tarifas{
  nombre
  id
  costoHabitacion
  costoHoraExtra
  costoHospedajeExtra
  costoPersonaExtra
  horasExtraMax
  hospedajesExtraMax
  personasExtraMax
  tipoHabitacion {
    nombre
  }
  }
}
`;


const GET_TARIFA = gql`
  query {
  tarifas{
  nombre
  id
  tipoHabitacion {
    nombre
  }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class TarifasService {

  private tarifasSubjext = new BehaviorSubject<any[]>([null])
  tarifa$ = this.tarifasSubjext.asObservable();


constructor(
  private apollo: Apollo
) {
}

  getTarifas() {
    this.apollo.watchQuery({
      query: GET_TARIFAS
    }).valueChanges.pipe(
      take(1),
      tap(({ data }) => {
        const { tarifas }: any = data
        this.tarifasSubjext.next(tarifas)
      })
    ).subscribe()

  }

}
