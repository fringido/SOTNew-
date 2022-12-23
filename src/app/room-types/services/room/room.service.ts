import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RoomStatusEnum } from '../../enums/room-status.enum';
import { Room } from '../../interfaces/room.interface';
import { ModoAppInitialState, ModoAppRoomState } from '../../state/modo-app-room.state';

@Injectable()
export class RoomService {

  private selectedRoom = new BehaviorSubject<Room | null>(null);
  selectedRoom$ = this.selectedRoom.asObservable();

  private modoAppHabitacion = new BehaviorSubject<ModoAppRoomState>(ModoAppInitialState);
  modoAppHabitacion$ = this.modoAppHabitacion.asObservable();

  constructor(
  ) { }

  updateModoAppHabitacion(state: Partial<ModoAppRoomState>) {
    this.modoAppHabitacion.next({...this.modoAppHabitacion.value, ...state});
  }

  setSelectedRoom(room: any = null) {
    this.selectedRoom.next(room)
  }

  isroomPorCobrar(roomStatus: RoomStatusEnum) {
    return roomStatus === RoomStatusEnum.OCUPADA_POR_COBRAR ||
    roomStatus === RoomStatusEnum.OCUPADA_ROOM_SERVICE_POR_COBRAR ||
    roomStatus === RoomStatusEnum.OCUPADA_ROOM_SERVICE_EXTRAS_POR_COBRAR;
  }
}
