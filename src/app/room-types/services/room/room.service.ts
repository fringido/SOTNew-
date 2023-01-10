import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { RoomStatusEnum } from '../../enums/room-status.enum';
import { Room } from '../../interfaces/room.interface';
import { ModoAppRoomInitialState, ModoAppRoomState } from '../../state/modo-app-room.state';


@Injectable()
export class RoomService {

  private selectedRoom = new BehaviorSubject<Room | null>(null);
  selectedRoom$ = this.selectedRoom.asObservable();

  private updatedRoom = new Subject<any>();
  updatedRoom$ = this.updatedRoom.asObservable();

  private modoAppHabitacion = new BehaviorSubject<ModoAppRoomState>(ModoAppRoomInitialState);
  modoAppHabitacion$ = this.modoAppHabitacion.asObservable();

  private filtradoHabitacion = new BehaviorSubject<RoomStatusEnum | null | 'expirada'>(null);
  filtradoHabitacion$ = this.filtradoHabitacion.asObservable();

  constructor(
  ) { }


  // Manejo de estado
  updateModoAppHabitacion(state: Partial<ModoAppRoomState>) {
    this.modoAppHabitacion.next({...this.modoAppHabitacion.value, ...state});
  }

  /**
   * Selecciona o deselecciona una habitacion
   * */
  setSelectedRoom(room: any = null) {
    this.selectedRoom.next(room)
  }

  /**
   * Actualiza el valor de una habitación seleccionada
  */
  updateSelectedRoom(room: any){
    this.updatedRoom.next(room);
  }

  updateFiltradoHabitacion(state: RoomStatusEnum | null | 'expirada') {
    this.filtradoHabitacion.next(state);
  }

  isroomPorCobrar(roomStatus: RoomStatusEnum) {
    return roomStatus === RoomStatusEnum.POR_COBRAR ||
    roomStatus === RoomStatusEnum.ROOM_SERVICE_POR_COBRAR ||
    roomStatus === RoomStatusEnum.ROOM_SERVICE_EXTRAS_POR_COBRAR;
  }

  // http
  finalizarRentaSucia(roomNumber: number) {
    return new Promise((resolve, reject) => {
      resolve({
        status: RoomStatusEnum.SUCIA,
        tipo: "Junior Villa",
        statusTimer: 3700,
        roomNumber,
        matricula: "ABC-123",
        tarifa: "Pie",
        camaristaOCamaristas: 2,
        supervisor: null,
        duracionTarifa: 10000
    })
    });
  }

  finalizarRentaMediaSucia(roomNumber: number) {
    return new Promise((resolve, reject) => {
      resolve({
        status: RoomStatusEnum.MEDIA_SUCIA,
        tipo: "Junior Villa",
        statusTimer: 3700,
        roomNumber,
        matricula: "ABC-123",
        tarifa: "Pie",
        camaristaOCamaristas: 2,
        supervisor: null,
        duracionTarifa: 10000
    })
    });
  }

}

