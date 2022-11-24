import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HomeService {

  private isSidenavOpen = new BehaviorSubject<boolean>(true);
  isSidenavOpen$ = this.isSidenavOpen.asObservable();

  constructor() { }


  toggleSidenav() {
    this.isSidenavOpen.next(!this.isSidenavOpen.value);
  }
}
