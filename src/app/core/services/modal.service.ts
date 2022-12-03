import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ModalService {

  private isModalOpen = new BehaviorSubject<boolean>(false);
  isModalOpen$ = this.isModalOpen.asObservable();

  constructor() { }

  open(){
    this.isModalOpen.next(true)
  }
  close(){
    this.isModalOpen.next(false)
  }


}
