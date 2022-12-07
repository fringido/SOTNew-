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
import { Subscription } from 'rxjs';
import { HomeService } from '../home/services/home/home.service';
import { SidebarService } from '../sidebar/services/sidebar/sidebar.service';
import { RoomStatusEnum } from './enums/room-status.enum';
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

  @ViewChildren('roomsRef') roomsRef!: QueryList<ElementRef>;

  isIpadMini!: boolean;

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
          statusTimer: 3700,
          roomNumber: 1,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 2,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 3,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 4,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 5,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 6,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 7,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 8,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 9,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 10,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 11,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 12,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 13,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 14,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 15,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 16,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 17,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 18,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 19,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 20,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 21,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 22,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 23,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
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
          statusTimer: 3700,
          roomNumber: 25,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 26,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 27,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 28,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 29,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 30,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 31,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
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
          statusTimer: 3700,
          roomNumber: 33,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 34,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 35,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 36,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 37,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 38,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 39,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 40,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 41,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 42,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 43,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 44,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 45,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 46,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 47,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 48,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 49,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 50,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 51,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
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
          statusTimer: 3700,
          roomNumber: 53,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
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
          statusTimer: 3700,
          roomNumber: 54,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 55,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 56,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 57,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 58,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 59,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 60,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 61,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
          roomNumber: 62,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
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
          statusTimer: 3700,
          roomNumber: 64,
          matricula: 'ABC-123',
          tarifa: 'Pie',
          camaristaOCamaristas: 2,
          supervisor: null,
          duracionTarifa: 10000
        },
        {
          status: this.statusRoom.LIBRE,
          statusTimer: 3700,
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


  constructor(
    private readonly homeService: HomeService,
    private readonly renderer: Renderer2,
    private readonly sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.isIpadMini = window.innerWidth <= 1025;
    this.isShowingSidenavSubs = this.homeService.showSidenav$.subscribe(
      (isShowing) => this.isShowingSidenav = isShowing
    )
    this.sidenavStateSubs = this.sidebarService.sidebarState$.subscribe((state) => {
      if(state !== 'roomSelected') {
        this.unselectRoom();
      }
    });
  }

  ngOnDestroy(): void {
    this.isShowingSidenavSubs.unsubscribe();
    this.sidenavStateSubs.unsubscribe();
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
    if(index < this.roomsByType.length -1) {
      return;
    }
    if (this.isIpadMini) {
      return '-13.5vh';
    }
    return '6vh';
  }

  selectRoom(room: any) {
    // Agregar sombra a los elementos que no fueron seleccionados
    this.roomsRef
      .toArray()
      .filter((roomEl) => roomEl.nativeElement.id !== 'room_' + room.roomNumber)
      .forEach((roomEl) => this.renderer.addClass(roomEl.nativeElement, 'no-filtro'));
    // Mostrar sidenav para ver los detalles del cuarto seleccionado
    this.homeService.toggleSidenav(true);
    // mostrar los detalles en el sidebar
    this.sidebarService.setSidebarState('roomSelected', room);
  }

  unselectRoom() {
    this.roomsRef
      .toArray()
      .forEach((roomEl) => this.renderer.removeClass(roomEl.nativeElement, 'no-filtro'));
  }
}
