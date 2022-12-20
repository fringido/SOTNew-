import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RoomStatusEnum } from '../../enums/room-status.enum';
import { Room } from '../../interfaces/room.interface';

@Injectable()
export class RoomService {

  private selectedRoom = new BehaviorSubject<Room | null>(null);
  selectedRoom$ = this.selectedRoom.asObservable();

  private modoCambioHabitacion = new BehaviorSubject<boolean>(false);
  modoCambioHabitacion$ = this.modoCambioHabitacion.asObservable();

  constructor(
  ) { }

  toggleModoCambioHabitacion(active?: boolean) {
    this.modoCambioHabitacion.next(active ?? !this.modoCambioHabitacion.value);
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
