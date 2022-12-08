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
  @Input('duracionTarifa') duracionTarifa: number = 0;


  private readonly statusOptions: { [key in RoomStatusEnum]: () => void } = {
    [RoomStatusEnum.LIBRE]: () => {
      this.bgColor = BgColorEnum.SUCCESS;
      this.textColor = TextColorEnum.SUCCESS;
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
