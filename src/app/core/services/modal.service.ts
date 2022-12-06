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

  private isShowHeader = new BehaviorSubject<boolean>(false);
  isShowHeader$ = this.isModalOpen.asObservable();




  constructor() { }



  showHeader(value: boolean) {
    this.isShowHeader.next(value)
  }

  open(){
    this.isModalOpen.next(true)
  }

  close(){
    this.isModalOpen.next(false)
  }


}
