import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RoomService {

  private selectedRoom = new BehaviorSubject<any>({});
  selectedRoom$ = this.selectedRoom.asObservable();

  constructor(
  ) { }

  setSelectedRoom(room: any = null) {
    this.selectedRoom.next(room)
  }
}
