import { Component, OnInit,HostListener } from '@angular/core';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { RoomService } from 'src/app/room-types/services/room/room.service';
import { HomeService } from '../../services/home/home.service';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';
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
      status: RoomStatusEnum.LIBRE,
      color: 'sot-bg-success',
      icon: 'far fa-check-circle icon-cobrar',
      isTextScrollable: true
    },
    { 
      name: 'Preparada',
      count: 10,
      status: RoomStatusEnum.LIBRE,
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
      status: RoomStatusEnum.LIBRE,
      color: 'sot-bg-purple',
      icon: 'icon-calendar',
      isTextScrollable: false
    },
    { 
      name: 'Preparada y Reservada',
      status: RoomStatusEnum.LIBRE,
      count: 10,
      color: 'sot-bg-purple',
      icon: 'icon-calendar',
      isTextScrollable: true
    },
    { 
      name: 'Bloqueada',
      count: 10,
      status: RoomStatusEnum.LIBRE,
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

  constructor(
    private homeService: HomeService,
    private readonly roomService: RoomService,
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.isModalOpenSubs = this.modalService.isModalOpen$.subscribe((isOpen) => this.isModalOpen = isOpen)
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
