import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RoomStatusEnum } from '../../enums/room-status.enum';
import { RoomStateCount, RoomStateCountInitialState, RoomStateCountKeys } from '../../state/room-types-count-state';

@Injectable({
  providedIn: 'root'
})
export class RoomTypesService {

  private roomStateCount = new BehaviorSubject<RoomStateCount>({...RoomStateCountInitialState});
  roomStateCount$ = this.roomStateCount.asObservable();

  constructor() { }



  private statusOptions(key: RoomStatusEnum, obj: any, value: number) {
    const options = {
      [RoomStatusEnum.LIBRE]: () => {
        obj[RoomStateCountKeys.libre] += value;
      },
      [RoomStatusEnum.LIBRE_CON_DETALLES]: () => {
        obj[RoomStateCountKeys.libre] += value;
      },
      [RoomStatusEnum.PREPARADA]: () => {
        obj[RoomStateCountKeys.preparada] += value;
      },
      [RoomStatusEnum.OCUPADA]: () => {
        obj[RoomStateCountKeys.ocupada] += value;
      },
      [RoomStatusEnum.POR_COBRAR]: () => {
        obj[RoomStateCountKeys.porCobrar] += value;
      },
      [RoomStatusEnum.ROOM_SERVICE_POR_COBRAR]: () => {
        obj[RoomStateCountKeys.porCobrar] += value;
      },
      [RoomStatusEnum.ROOM_SERVICE]: () => {
        obj[RoomStateCountKeys.roomService] += value;
      },
      [RoomStatusEnum.RESERVADA]: () => {
        obj[RoomStateCountKeys.reservada] += value;
      },
      [RoomStatusEnum.RESERVADA_PREPARADA]: () => {
        obj[RoomStateCountKeys.reservadaPreparada] += value;
      },
      [RoomStatusEnum.ROOM_SERVICE_EXTRAS_POR_COBRAR]: () => {
        obj[RoomStateCountKeys.porCobrar] += value;
      },
      [RoomStatusEnum.SUCIA]: () => {
        obj[RoomStateCountKeys.sucia] += value;
      },
      [RoomStatusEnum.MEDIA_SUCIA]: () => {
        obj[RoomStateCountKeys.mediaSucia] += value;
      },
      [RoomStatusEnum.EN_LIMPIEZA]: () => {
        obj[RoomStateCountKeys.enLimpieza] += value;
      },
      [RoomStatusEnum.EN_SUPERVISION]: () => {
        obj[RoomStateCountKeys.enSupervision] += value;
      },
      [RoomStatusEnum.BLOQUEADA]: () => {
        obj[RoomStateCountKeys.bloqueada] += value;
      },
      [RoomStatusEnum.SUPERVISION_MANTENIMIENTO]: () => {
        obj[RoomStateCountKeys.enSupervision] += value;
      },
      [RoomStatusEnum.MANTENIMIENTO]: () => {
        obj[RoomStateCountKeys.mantenimiento] += value;
      }
    }
    options[key] ? options[key]() : null;
  }


  // TODO: tipar roomsByType, viene de RoomStateComponent
  updateRoomStateCount(roomsByType: any[]) {
    let newCountState = {...RoomStateCountInitialState};

    const roomStatusCountByType = roomsByType.map((type) => {
      let roomCountByType: any = {};
      for(let room of type.rooms) {
        roomCountByType[room.status] ? roomCountByType[room.status] +=1 : roomCountByType[room.status] = 1;
        if(room.statusTimer > 3600) {
          newCountState.alertas ++; 
        } 
      };
      return roomCountByType;
    });
    const newRoomStateCountState = roomStatusCountByType.map((roomStatusCountByType: any) => {
      let countByRoom = {...RoomStateCountInitialState};
      for(let [key, value] of Object.entries(roomStatusCountByType)) {
        this.statusOptions(key as RoomStatusEnum, countByRoom, value as number);
      }
      return {...countByRoom};
    });
    newRoomStateCountState.forEach((countByType) => {
      for(let [key, count] of Object.entries(countByType)) {
        newCountState[key as RoomStateCountKeys] += count;
      }
    });
    this.roomStateCount.next(<RoomStateCount><unknown>newCountState);
  }
}
