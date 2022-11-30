import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Injectable()
export class HomeService {

  private showSidenav = new BehaviorSubject<boolean>(true);
  showSidenav$ = this.showSidenav.asObservable();

  toggleSidenav() {
    this.showSidenav.next(!this.showSidenav.value);
  }

}
