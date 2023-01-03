import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { take, tap } from 'rxjs';

// const GET_HABITAICON = gql `
// {
//   habitaciuon() {
//     id,

//   }
// }
// `;

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  constructor(
    private apollo: Apollo
  ) { }

  // getHabitaciones(){
  //   this.apollo.watchQuery<any>({
  //     query: GET_HABITAICON
  //   }).valueChanges.pipe(
  //     take(1),
  //     tap(res =>{
  //       console.log(res);
  //     })
  //   ).subscribe();
  // }
}
