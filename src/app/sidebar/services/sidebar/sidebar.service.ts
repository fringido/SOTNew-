import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RoomService } from 'src/app/room-types/services/room/room.service';
import { SidebarState } from '../../interfaces/sidebar-state.interface';

@Injectable()
export class SidebarService {

  private sidebarState = new BehaviorSubject<SidebarState>('home');
  sidebarState$ = this.sidebarState.asObservable();

  private roomService;
  constructor(
    private readonly injector: Injector
    ) {
      this.roomService = this.injector.get(RoomService);
    }

  setSidebarState(state:  SidebarState, room: any = null) {
    this.sidebarState.next(state);
    this.roomService.setSelectedRoom(room);
  }
}
