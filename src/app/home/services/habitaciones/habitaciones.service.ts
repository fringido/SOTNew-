import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { take, tap } from 'rxjs';

const GET_HABITAICON = gql `
{
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  constructor(
    private apollo: Apollo
  ) { }

  getHabitaciones(){
    this.apollo.watchQuery<any>({
      query: GET_HABITAICON
    }).valueChanges.pipe(
      take(1),
      tap(res =>{
        console.log(res);
      })
    ).subscribe();
  }
}
