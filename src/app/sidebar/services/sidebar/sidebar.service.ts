import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarState } from '../../interfaces/sidebar-state.interface';

@Injectable()
export class SidebarService {

  private sidebarState = new BehaviorSubject<SidebarState>('home');
  sidebarState$ = this.sidebarState.asObservable();
  
  private selectedRoom = new BehaviorSubject<any>({});
  selectedRoom$ = this.selectedRoom.asObservable();

  constructor() { }

  setSidebarState(state:  SidebarState, room: any = null) {
    this.sidebarState.next(state);
    this.selectedRoom.next(room);
  }
}
