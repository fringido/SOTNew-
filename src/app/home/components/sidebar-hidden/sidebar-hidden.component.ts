import { Component, OnInit,HostListener } from '@angular/core';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { RoomService } from 'src/app/room-types/services/room/room.service';
import { HomeService } from '../../services/home/home.service';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';
import { RoomStateCountInitialState, RoomStateCountKeys } from 'src/app/room-types/state/room-types-count-state';
import { RoomTypesService } from 'src/app/room-types/services/room-types/room-types.service';
@Component({
  selector: 'app-sidebar-hidden',
  templateUrl: './sidebar-hidden.component.html',
  styleUrls: ['./sidebar-hidden.component.scss']
})
export class SidebarHiddenComponent implements OnInit {

  statusRooms = [
    { 
      name: 'Libre',
      count: 10,
      status: RoomStatusEnum.LIBRE,
      color: 'sot-bg-success',
      icon: 'far fa-check-circle',
      isTextScrollable: false
    },
    { 
      name: 'Por cobrar',
      count: 10,
      status: RoomStatusEnum.POR_COBRAR,
      color: 'sot-bg-success',
      icon: 'far fa-check-circle icon-cobrar',
      isTextScrollable: true
    },
    { 
      name: 'Preparada',
      count: 10,
      status: RoomStatusEnum.PREPARADA,
      color: 'sot-bg-success',
      icon: 'far fa-check-circle icon-car mr3px fa-xs',
      isTextScrollable: false
    },
    { 
      name: 'Ocupada',
      count: 10,
      status: RoomStatusEnum.OCUPADA,
      color: 'sot-bg-danger',
      icon: 'far fa-check-circle icon-pareja-ocupada',
      isTextScrollable: false
    },
    { 
      name: 'Room service',
      count: 10,
      status: RoomStatusEnum.ROOM_SERVICE,
      color: 'sot-bg-danger',
      icon: 'far fa-check-circle icon-roomservice fa-2xs mr5px',
      isTextScrollable: true
    },
    { 
      name: 'Sucia',
      count: 10,
      status: RoomStatusEnum.SUCIA,
      color: 'sot-bg-warn',
      icon: 'far fa-check-circle icon-sucia',
      isTextScrollable: false
    },
    { 
      name: 'Media Sucia',
      count: 10,
      status: RoomStatusEnum.MEDIA_SUCIA,
      color: 'sot-bg-orange', 
      icon: 'far fa-check-circle icon-sucia',
      isTextScrollable: true
    },
    { 
      name: 'Limpieza',
      count: 10,
      status: RoomStatusEnum.EN_LIMPIEZA,
      color: 'sot-bg-blue',
      icon: 'far fa-check-circle icon-limpieza',
      isTextScrollable: false
    },
    { 
      name: 'Supervisión',
      count: 10,
      status: RoomStatusEnum.EN_SUPERVISION,
      color: 'sot-bg-blue',
      icon: 'far fa-check-circle icon-search',
      isTextScrollable: false
    },
    { 
      name: 'Reservar',
      count: 10,
      status: RoomStatusEnum.RESERVADA,
      color: 'sot-bg-purple',
      icon: 'icon-calendar',
      isTextScrollable: false
    },
    { 
      name: 'Preparada y Reservada',
      status: RoomStatusEnum.RESERVADA_PREPARADA,
      count: 10,
      color: 'sot-bg-purple',
      icon: 'icon-calendar',
      isTextScrollable: true
    },
    { 
      name: 'Bloqueada',
      count: 10,
      status: RoomStatusEnum.BLOQUEADA,
      color: 'sot-bg-purple',
      icon: 'far fa-check-circle icon-candado',
      isTextScrollable: false
    },
    { 
      name: 'Mantenimiento',
      count: 10,
      status: RoomStatusEnum.MANTENIMIENTO,
      color: 'sot-bg-grey-item',
      icon: 'far fa-check-circle icon-mantenimiento',
      isTextScrollable: true
    },
    { 
      name: 'Alertas',
      count: 10,
      status: RoomStatusEnum.LIBRE,
      color: 'sot-bg-grey-item',
      icon: 'fas fa-clock',
      isTextScrollable: false
    },
  ]

  isModalOpen!: boolean;
  isModalOpenSubs!: Subscription;

  countRoomState = {...RoomStateCountInitialState};


  constructor(
    private homeService: HomeService,
    private readonly roomService: RoomService,
    private readonly modalService: ModalService,
    private readonly roomTypesService: RoomTypesService
    ) { }

  private statusCountOptions(key: RoomStateCountKeys, value: number) {
    const options = {
      [RoomStateCountKeys.libre]: () => {
        this.statusRooms[0].count = value
      },
      [RoomStateCountKeys.porCobrar]: () => {
        this.statusRooms[1].count = value
      },
      [RoomStateCountKeys.preparada]: () => {
        this.statusRooms[2].count = value
      },
      [RoomStateCountKeys.ocupada]: () => {
        this.statusRooms[3].count = value
      },
      [RoomStateCountKeys.roomService]: () => {
        this.statusRooms[4].count = value
      },
      [RoomStateCountKeys.sucia]: () => {
        this.statusRooms[5].count = value
      },
      [RoomStateCountKeys.mediaSucia]: () => {
        this.statusRooms[6].count = value
      },
      [RoomStateCountKeys.enLimpieza]: () => {
        this.statusRooms[7].count = value
      },
      [RoomStateCountKeys.enSupervision]: () => {
        this.statusRooms[8].count = value
      },
      [RoomStateCountKeys.reservada]: () => {
        this.statusRooms[9].count = value
      },
      [RoomStateCountKeys.reservadaPreparada]: () => {
        this.statusRooms[10].count = value
      },
      [RoomStateCountKeys.bloqueada]: () => {
        this.statusRooms[11].count = value
      },
      [RoomStateCountKeys.mantenimiento]: () => {
        this.statusRooms[12].count = value
      },
      [RoomStateCountKeys.alertas]: () => {
        this.statusRooms[13].count = value
      },
    }
    options[key] ? options[key]() : null;
  }

  ngOnInit(): void {
    this.isModalOpenSubs = this.modalService.isModalOpen$.subscribe((isOpen) => this.isModalOpen = isOpen)

    this.roomTypesService.roomStateCount$.subscribe((newCountState) => {
      this.countRoomState = {...newCountState}
      for(let [key, value] of Object.entries(newCountState)) {
        this.statusCountOptions(key as RoomStateCountKeys, value)
      }
      this.statusRooms = [...this.statusRooms]
    });
  }

  @HostListener('document:keydown', ['$event'])
  onEscapeHandler(event: KeyboardEvent) {
    if(event.key !== 'Escape' || this.isModalOpen) {
      return;
    }
    // Al presionar Esc borrar el filtrado de habitaciones por status
    this.roomService.filtradoHabitacion$.pipe(take(1)).subscribe((status) => {
      if(status) {
        this.roomService.updateFiltradoHabitacion(null);
      } 
    });

  }

  toggle() {
    this.homeService.toggleSidenav();
    this.roomService.updateFiltradoHabitacion(null);
  }

  filtrarPorStatus(status: RoomStatusEnum) {
    this.roomService.updateFiltradoHabitacion(status);
  }

}
