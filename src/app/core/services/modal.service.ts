import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ModalService {
  constructor() { }

  private isModalOpen = new BehaviorSubject<boolean>(false);
  isModalOpen$ = this.isModalOpen.asObservable();

  open(){
    this.isModalOpen.next(true)
  }

  close(){
    this.isModalOpen.next(false)
  }


}
