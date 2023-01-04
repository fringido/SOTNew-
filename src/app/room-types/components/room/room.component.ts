import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { BgColorEnum } from '../../enums/bg-color.enum';
import { RoomIconsEnum } from '../../enums/icon.enum';
import { RoomStatusEnum } from '../../enums/room-status.enum';
import { TextColorEnum } from '../../enums/txt-color.enum';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnChanges {

  readonly AvailableRoomStatus = RoomStatusEnum;

  bgColor: BgColorEnum = BgColorEnum.SUCCESS;
  textColor: TextColorEnum = TextColorEnum.SUCCESS;
  icon: RoomIconsEnum = RoomIconsEnum.CHECK;

  @Input('status') status!: RoomStatusEnum;
  @Input('statusTimer') statusTimer: number = 0;
  @Input('roomNumber') roomNumber!: number;
  @Input('matricula') matricula!: string;
  @Input('tarifa') tarifa!: string;
  @Input('camaristaOCamaristas') camaristaOCamaristas!: string | number;
  @Input('supervisor') supervisor!: string;
  // Si esta en mantenimiento se usa este atributo
  @Input('observaciones') observaciones?: string;
  @Input('duracionTarifa') duracionTarifa: number = 0;


  private readonly statusOptions: { [key in RoomStatusEnum]: () => void } = {
    [RoomStatusEnum.LIBRE]: () => {
      this.bgColor = BgColorEnum.SUCCESS;
      this.textColor = TextColorEnum.SUCCESS;
      this.icon = RoomIconsEnum.CHECK;
    },
    [RoomStatusEnum.LIBRE_CON_DETALLES]: () => {
      this.bgColor = BgColorEnum.PURPLE;
      this.textColor = TextColorEnum.PURPLE;
      this.icon = RoomIconsEnum.CHECK;
    },
    [RoomStatusEnum.PREPARADA]: () => {
      this.bgColor = BgColorEnum.SUCCESS;
      this.textColor = TextColorEnum.SUCCESS;
      this.icon = RoomIconsEnum.CAR;
    },
    [RoomStatusEnum.OCUPADA]: () => {
      this.bgColor = BgColorEnum.DANGER;
      this.textColor = TextColorEnum.DANGER;
      this.icon = RoomIconsEnum.PAREJA_OCUPADA;
    },
    [RoomStatusEnum.POR_COBRAR]: () => {
      this.bgColor = BgColorEnum.DANGER;
      this.textColor = TextColorEnum.DANGER;
      this.icon = RoomIconsEnum.PAREJA_OCUPADA;
    },
    [RoomStatusEnum.ROOM_SERVICE_POR_COBRAR]: () => {
      this.bgColor = BgColorEnum.DANGER;
      this.textColor = TextColorEnum.DANGER;
      this.icon = RoomIconsEnum.ROOM_SERVICE;
    },
    [RoomStatusEnum.ROOM_SERVICE]: () => {
      this.bgColor = BgColorEnum.DANGER;
      this.textColor = TextColorEnum.DANGER;
      this.icon = RoomIconsEnum.ROOM_SERVICE;
    },
    [RoomStatusEnum.RESERVADA]: () => {
      this.bgColor = BgColorEnum.PURPLE;
      this.textColor = TextColorEnum.PURPLE;
      this.icon = RoomIconsEnum.RESERVADA;
    },
    [RoomStatusEnum.RESERVADA_PREPARADA]: () => {
      this.bgColor = BgColorEnum.PURPLE;
      this.textColor = TextColorEnum.PURPLE;
      this.icon = RoomIconsEnum.RESERVADA;
    },
    [RoomStatusEnum.ROOM_SERVICE_EXTRAS_POR_COBRAR]: () => {
      this.bgColor = BgColorEnum.DANGER;
      this.textColor = TextColorEnum.SUCCESS;
      this.icon = RoomIconsEnum.POR_COBRAR;
    },
    [RoomStatusEnum.SUCIA]: () => {
      this.bgColor = BgColorEnum.WARN;
      this.textColor = TextColorEnum.WARN;
      this.icon = RoomIconsEnum.SUCIA;
    },
    [RoomStatusEnum.MEDIA_SUCIA]: () => {
      this.bgColor = BgColorEnum.ORANGE;
      this.textColor = TextColorEnum.ORANGE;
      this.icon = RoomIconsEnum.SUCIA;
    },
    [RoomStatusEnum.EN_LIMPIEZA]: () => {
      this.bgColor = BgColorEnum.BLUE;
      this.textColor = TextColorEnum.BLUE;
      this.icon = RoomIconsEnum.LIMPIEZA;
    },
    [RoomStatusEnum.EN_SUPERVISION]: () => {
      this.bgColor = BgColorEnum.BLUE;
      this.textColor = TextColorEnum.BLUE;
      this.icon = RoomIconsEnum.SUPERVISION;
    },
    [RoomStatusEnum.BLOQUEADA]: () => {
      this.bgColor = BgColorEnum.PURPLE;
      this.textColor = TextColorEnum.PURPLE;
      this.icon = RoomIconsEnum.CANDADO;
    },
    [RoomStatusEnum.SUPERVISION_MANTENIMIENTO]: () => {
      this.bgColor = BgColorEnum.BLUE;
      this.textColor = TextColorEnum.BLUE;
      this.icon = RoomIconsEnum.SUPERVISION
    },
    [RoomStatusEnum.MANTENIMIENTO]: () => {
      this.bgColor = BgColorEnum.GREY_ITEM;
      this.textColor = TextColorEnum.GREY_ITEM;
      this.icon = RoomIconsEnum.MANTENIMIENTO
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const status: RoomStatusEnum = changes?.['status']?.currentValue;
    this.statusOptions[status] ?
    this.statusOptions[status]() : null;
  }

  areMoreCamaristas() {
    return typeof this.camaristaOCamaristas === 'number';
  }

}
