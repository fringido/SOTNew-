import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room } from '../../interfaces/room.interface';

@Injectable()
export class RoomService {

  private selectedRoom = new BehaviorSubject<Room | null>(null);
  selectedRoom$ = this.selectedRoom.asObservable();

  constructor(
  ) { }

  setSelectedRoom(room: any = null) {
    this.selectedRoom.next(room)
  }
}
