import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RoomService } from 'src/app/room-types/services/room/room.service';
import { SidebarState } from '../../interfaces/sidebar-state.interface';

@Injectable()
export class SidebarService {

  private sidebarState = new BehaviorSubject<SidebarState>('home');
  sidebarState$ = this.sidebarState.asObservable();

  
  private roomService;
  selectedRoom$!: Observable<any>;
  
  
  constructor(
    private readonly injector: Injector
    ) {
      this.roomService = this.injector.get(RoomService);
      this.selectedRoom$ = this.roomService.selectedRoom$;
    }

  setSidebarState(state:  SidebarState, room: any = null) {
    this.sidebarState.next(state);
    this.roomService.setSelectedRoom(room);
  }
}
