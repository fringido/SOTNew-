import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription, take } from 'rxjs';
import { ConfimModalMessageComponent } from '../core/components/confim-modal-message/confim-modal-message.component';
import { CambioHabitacionService } from '../home/inicio-habitaciones/entrada-habitacion/services/cambio-habitacion/cambio-habitacion.service';
import { TipoMantenimientoEnum } from '../home/interfaces/tipo-mantenimiento.enum';
import { HomeService } from '../home/services/home/home.service';
import { SidebarService } from '../sidebar/services/sidebar/sidebar.service';
import { RoomStatusEnum } from './enums/room-status.enum';
import { RoomTypesService } from './services/room-types/room-types.service';
import { RoomService } from './services/room/room.service';
import { ModoAppRoomState } from './state/modo-app-room.state';
import { SuscripcionEstadoHabitacionService } from '../core/services/habitaciones/suscripcion-estado-habitacion.service';

@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.scss']
})
export class RoomTypesComponent implements OnInit, OnDestroy {

  statusRoom = RoomStatusEnum;
  isShowingSidenav!: boolean;
  isShowingSidenavSubs!: Subscription;
  sidenavStateSubs!: Subscription;

  selectedRoom!: any; //TODO: tipar la habitacion

  @ViewChildren('roomsRef') roomsRef!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('roomsTypeRef') roomsTypeRef!: QueryList<ElementRef>;

  isIpadMini!: boolean;

  modoAppRoom!: ModoAppRoomState;
  isModoCambioHabitacionSubs!: Subscription;

  updatedRoom!: any;
  updatedRoomSubs!: Subscription;

  filtradoHabitacionSubs!: Subscription;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isIpadMini = window.innerWidth <= 1025;
  }

  roomsByType = [
    {
      name: 'Junior Villa',
      rooms: [
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 1,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.PREPARADA,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 2,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.OCUPADA,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 3,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.SUCIA,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 4,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.MEDIA_SUCIA,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 5,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.EN_LIMPIEZA,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 6,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 'Luis Mario Hernández García',
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.EN_SUPERVISION,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 7,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: null,
          supervisor: 'Luis Mario Hernández García',
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.POR_COBRAR,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 8,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.ROOM_SERVICE_POR_COBRAR,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 9,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.ROOM_SERVICE_EXTRAS_POR_COBRAR,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 10,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.ROOM_SERVICE,
          tipo: 'Junior Villa',
          statusTimer: 3500,
          roomNumber: 11,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.ROOM_SERVICE_EXTRAS_POR_COBRAR,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 12,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.ROOM_SERVICE,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 13,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.SUCIA,
          tipo: 'Junior Villa',
          statusTimer: 3500,
          roomNumber: 14,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.MEDIA_SUCIA,
          tipo: 'Junior Villa',
          statusTimer: 3500,
          roomNumber: 15,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.EN_LIMPIEZA,
          tipo: 'Junior Villa',
          statusTimer: 3500,
          roomNumber: 16,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.MANTENIMIENTO,
          tipo: 'Junior Villa',
          statusTimer: 3500,
          roomNumber: 17,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          observaciones: 'La pantalla no enciende',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000,
          tipoMantenimiento: TipoMantenimientoEnum.MANTENIMIENTO
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 18,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 0,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.RESERVADA,
          tipo: 'Junior Villa',
          statusTimer: 0,
          roomNumber: 19,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 0,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.RESERVADA_PREPARADA,
          tipo: 'Junior Villa',
          statusTimer: 0,
          roomNumber: 20,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 0,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE_CON_DETALLES,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 21,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.BLOQUEADA,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 22,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000,
          observaciones: 'Bloqueado por texto'
        },
        {
          status: this.statusRoom.SUPERVISION_MANTENIMIENTO,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 23,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: null,
          supervisor: 'Luis Mario Hernández García',
          duracionTarifa: 10000,
          observaciones: 'Mant. por texto'
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Villa',
          statusTimer: 3700,
          roomNumber: 24,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
      ]
    },
    {
      name: 'Twin Suite',
      rooms: [
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Twin Suite',
          statusTimer: 3400,
          roomNumber: 25,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Twin Suite',
          statusTimer: 3400,
          roomNumber: 26,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Twin Suite',
          statusTimer: 3400,
          roomNumber: 27,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Twin Suite',
          statusTimer: 3400,
          roomNumber: 28,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Twin Suite',
          statusTimer: 3400,
          roomNumber: 29,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Twin Suite',
          statusTimer: 3400,
          roomNumber: 30,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Twin Suite',
          statusTimer: 3400,
          roomNumber: 31,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Twin Suite',
          statusTimer: 3400,
          roomNumber: 32,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
      ]
    },
    {
      name: 'Junior Suite',
      rooms: [
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 33,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 34,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 35,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 36,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 37,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 38,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 39,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 40,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 41,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 42,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 43,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 44,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 45,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 46,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 47,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 48,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 49,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 50,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 51,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Junior Suite',
          statusTimer: 3400,
          roomNumber: 52,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
      ]
    },
    {
      name: 'Pool Villa',
      rooms: [
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Pool Villa',
          statusTimer: 3400,
          roomNumber: 53,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Pool Villa',
          statusTimer: 3400,
          roomNumber: 54,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
      ]
    },
    {
      name: 'Pool & Spa',
      rooms: [
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Pool & Spa',
          statusTimer: 3400,
          roomNumber: 54,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Pool & Spa',
          statusTimer: 3400,
          roomNumber: 55,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Pool & Spa',
          statusTimer: 3400,
          roomNumber: 56,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Pool & Spa',
          statusTimer: 3400,
          roomNumber: 57,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Pool & Spa',
          statusTimer: 3400,
          roomNumber: 58,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Pool & Spa',
          statusTimer: 3400,
          roomNumber: 59,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Pool & Spa',
          statusTimer: 3400,
          roomNumber: 60,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Pool & Spa',
          statusTimer: 3400,
          roomNumber: 61,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Pool & Spa',
          statusTimer: 3400,
          roomNumber: 62,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Pool & Spa',
          statusTimer: 3400,
          roomNumber: 63,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
      ]
    },
    {
      name: 'Sky Suite',
      rooms: [
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Sky Suite',
          statusTimer: 3400,
          roomNumber: 64,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          tipo: 'Sky Suite',
          statusTimer: 3400,
          roomNumber: 65,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
      ]
    }
  ]

  habitaciones$ = this.subHabitacion.habitaciones$
  habitacionesWs: any
  constructor(
    private readonly renderer: Renderer2,
    private readonly router: Router,
    private readonly homeService: HomeService,
    private readonly roomService: RoomService,
    public dialogService: DialogService,
    private readonly sidebarService: SidebarService,
    private readonly roomTypesService: RoomTypesService,
    private readonly cambioHabitacionService: CambioHabitacionService,
    private subHabitacion: SuscripcionEstadoHabitacionService
  ) { }

  ngOnInit(): void {
    this.subHabitacion.getHabitaciones()
    this.subHabitacion.getHabitacionesSuscri()
    this.inicioDeVartiables()
    console.log(this.habitaciones$)
  }

  inicioDeVartiables(){
    this.roomTypesService.updateRoomStateCount(this.roomsByType);
    this.isIpadMini = window.innerWidth <= 1025;
    this.isShowingSidenavSubs = this.homeService.showSidenav$.subscribe(
      (isShowing) => this.isShowingSidenav = isShowing
    )
    this.sidenavStateSubs = this.sidebarService.sidebarState$.subscribe((state) => {
      if (state !== 'roomSelected' && this.selectedRoom) {
        this.unselectRooms();
      }
    });
    this.isModoCambioHabitacionSubs = this.roomService.modoAppHabitacion$.subscribe((state) => {
      this.modoAppRoom = state;
      if (state.cambio) {
        return this.filtrarRoomsLibresPorTipo()
      }
      if (!state.cambio) {
        this.unselectLibresPorTipo();
      }
      if (state.seleccionada) {
        return this.unselectRooms();
      }
    });
    this.updatedRoomSubs = this.roomService.updatedRoom$.subscribe((room) => {
      this.onUpdateRoom(room);
    });
    this.filtradoHabitacionSubs = this.roomService.filtradoHabitacion$.subscribe((status) => {
      this.onStatusFilter(status);
    });
  }

  ngOnDestroy(): void {
    this.isShowingSidenavSubs.unsubscribe();
    this.sidenavStateSubs.unsubscribe();
    this.updatedRoomSubs.unsubscribe();
    this.isModoCambioHabitacionSubs.unsubscribe();
    this.filtradoHabitacionSubs.unsubscribe();
  }

  marginXSkySuite(index: number) {
    // Si es sky suite reacomodar para poner como tercer fila y segunda columna a solicitud de UX
    if(index < this.roomsByType.length -1) {
      return;
    }
    if (this.isIpadMini) {
      return '0vw';
    }
    if (this.isShowingSidenav) {
      return '-58.5vh';
    }
    return '-65.5vh';
  }

  marginYSkySuite(index: number) {
    // Si es sky suite reacomodar para poner como tercer fila y segunda columna a solicitud de UX
    if(index < this.roomsByType.length -1 || this.isIpadMini) {
      return;
    }
    return '6vh';
  }

  onUpdateRoom(room: any) {
    let selectedRoomType = this.roomsByType.find((roomType) => roomType.name === room.tipo)!;
    const roomToUpdateIndex = selectedRoomType?.rooms.findIndex((roomFromType) => roomFromType.roomNumber === this.selectedRoom.roomNumber)!
    selectedRoomType.rooms[roomToUpdateIndex] = room;
    this.roomTypesService.updateRoomStateCount(this.roomsByType)
    this.unselectRooms();
  }

  selectRoom(room: any) { //TODO: tipar la habitacion
    // No permitir la seleccion de habitaciones de otro tipo cuando se está en modo cambio de habitacion.
    if(this.selectedRoom && this.modoAppRoom.cambio && (this.selectedRoom?.tipo !== room.tipo)) {
      return;
    }
    if(this.modoAppRoom.cambio && !(room.status === RoomStatusEnum.LIBRE)) {
      return;
    }
    if(this.modoAppRoom.cambio && room.status === RoomStatusEnum.LIBRE) {
      this.mostrarMensajeConfirmarCambioHabitacion(room);
      return;
    }
    this.roomService.updateModoAppHabitacion({cambio: false});
    if(this.selectedRoom?.roomNumber === room.roomNumber) {
      // regresar al sidebar en home desde un click de nuevo en la habitacion seleccionada
      return this.unselectRooms();
    }
    // Quitar sombreado a elemento que ha sido seleccionado
    const selectedRoomEl =
    this.roomsRef
    ?.toArray()
    .find(roomEl => roomEl.nativeElement.id.endsWith('room_' + room.roomNumber))?.nativeElement;
    this.renderer.removeClass(selectedRoomEl, 'no-filtro');

    // Agregar sombra a los elementos que no fueron seleccionados
    this.roomsRef
      ?.toArray()
      .filter((roomEl) => !roomEl.nativeElement.id.endsWith('room_' + room.roomNumber))
      .forEach((roomEl) => this.renderer.addClass(roomEl.nativeElement, 'no-filtro'));
    // Mostrar sidenav para ver los detalles del cuarto seleccionado
    this.homeService.toggleSidenav(true);
    // mostrar los detalles en el sidebar
    this.sidebarService.setSidebarState('roomSelected', room);
    this.selectedRoom = room;
  }

  unselectRooms() {
    this.selectedRoom = null;
    this.sidebarService.setSidebarState('home');
    this.roomsRef
    ?.toArray()
    .forEach((roomEl) => this.renderer.removeClass(roomEl.nativeElement, 'no-filtro'));
  }

  filtrarRoomsLibresPorTipo() {
    const selectedRoomType = this.roomsByType
      .find(type => type.rooms
      .find((room => room.roomNumber === this.selectedRoom.roomNumber)));
    this.roomsRef?.toArray()
      .filter(room => room.nativeElement.id.startsWith(`type_${selectedRoomType?.name}`))
      .filter(room => {
        return room.nativeElement.children[0].attributes.getNamedItem('custom-status')?.nodeValue === RoomStatusEnum.LIBRE
      })
      .forEach((room) => {
        this.renderer.removeClass(room.nativeElement, 'no-filtro')
    });

    const selectedRoomEl =
    this.roomsRef
    ?.toArray()
    .find(roomEl => roomEl.nativeElement.id.endsWith('room_' + this.selectedRoom.roomNumber))?.nativeElement;
    this.renderer.addClass(selectedRoomEl, 'no-filtro');

  }

  unselectLibresPorTipo() {
    if(this.modoAppRoom.cambio) {
      this.roomService.updateModoAppHabitacion({cambio: false, seleccionada: true})
    }
    if(!this.selectedRoom) {
      return;
    }
    this.roomsRef
    ?.toArray()
    .filter(roomEl => !roomEl.nativeElement.id.endsWith('room_' + this.selectedRoom.roomNumber))
    .forEach((roomEl) => this.renderer.addClass(roomEl.nativeElement, 'no-filtro'));

    const selectedRoomEl =
    this.roomsRef
    ?.toArray()
    .find(roomEl => roomEl.nativeElement.id.endsWith('room_' + this.selectedRoom.roomNumber))?.nativeElement;

    this.renderer.removeClass(selectedRoomEl, 'no-filtro');
  }

  cambiarHabitacion(room: any) {//TODO: tipar habitacion
    let selectedRoomType = this.roomsByType.find((roomType) => roomType.name === room.tipo)!;
    const roomFromIndex = selectedRoomType?.rooms.findIndex((roomFromType) => roomFromType === this.selectedRoom)!
    const roomToIndex = selectedRoomType?.rooms.findIndex((roomFromType) => roomFromType === room)!

    const fromRoomNumberTemp = this.selectedRoom.roomNumber;
    const toRoomNumberTemp = room.roomNumber;

    selectedRoomType.rooms[roomFromIndex] = room;
    selectedRoomType.rooms[roomToIndex] = this.selectedRoom;

    selectedRoomType.rooms[roomFromIndex].roomNumber = fromRoomNumberTemp;
    selectedRoomType.rooms[roomToIndex].roomNumber = toRoomNumberTemp;

    this.roomsByType = JSON.parse(JSON.stringify(this.roomsByType));

    this.roomService.updateModoAppHabitacion({cambio: false});
    this.unselectRooms();
  }

  mostrarMensajeConfirmarCambioHabitacion(room: any) {
    const ref = this.dialogService.open(ConfimModalMessageComponent, {
      data: {
        message: `ESTÁS POR CAMBIAR DE LA ${this.selectedRoom.tipo} ${this.selectedRoom.roomNumber} A LA ${room.roomNumber}`
      },
    });

    ref.onClose.subscribe(({confirmed}) => {
      if (!confirmed) {
        return;
      }
      this.router.navigate(['hotel/rentaHabitacion/cambio']);
      this.cambioHabitacionService.cambioHabitacionConfirmado$.pipe(take(1)).subscribe((confirmed) => {
        if(confirmed) {
          this.cambiarHabitacion(room);
        }
      });
    });
  }

  onStatusFilter(status: RoomStatusEnum | null | 'expirada') {
    if(!status) {
      return this.unselectRooms();
    }
    this.unselectRooms();
    if(status === 'expirada') {
      this.roomsRef
      ?.toArray()
      .filter(roomEl => {
        return roomEl.nativeElement
        .children[0]
        .attributes
        .getNamedItem('custom-expirada')
        ?.nodeValue === 'no-expirada'}
      ).forEach((roomEl) => this.renderer.addClass(roomEl.nativeElement, 'no-filtro'));
      return;
    }
    this.roomsRef
    ?.toArray()
    .filter(roomEl =>
      roomEl
        .nativeElement
        .children[0]
        .attributes
        .getNamedItem('custom-status')
        ?.nodeValue !== status
    ).forEach((roomEl) => this.renderer.addClass(roomEl.nativeElement, 'no-filtro'));
  }
}
