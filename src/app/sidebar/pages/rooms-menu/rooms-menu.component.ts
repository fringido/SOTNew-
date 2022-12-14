import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChildren, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ModalService } from 'src/app/core/services/modal.service';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { RoomTypesService } from 'src/app/room-types/services/room-types/room-types.service';
import { RoomService } from 'src/app/room-types/services/room/room.service';
import { RoomStateCountInitialState, RoomStateCountKeys } from 'src/app/room-types/state/room-types-count-state';

@Component({
  selector: 'app-rooms-menu',
  templateUrl: './rooms-menu.component.html',
  styleUrls: ['./rooms-menu.component.scss']
})
export class RoomsMenuComponent implements OnInit, OnDestroy {

  isIpadMini!: boolean;

  statusRoomsAll: any;

  filterText!: FormControl
  @ViewChildren('roomTypesRef') roomTypesRef!: QueryList<ElementRef<HTMLButtonElement>>;

  isModalOpen!: boolean;
  isModalOpenSubs!: Subscription;

  countRoomState = {...RoomStateCountInitialState};
  

  statusRooms = [{
    name: 'Libre',
    status: RoomStatusEnum.LIBRE,
    count: 0,
    color: '#0AC917',
    colorClass: 'txt-success',
    icon: 'far fa-check-circle',
    isTextScrollable: false,
    iconExtraMargin: '-5px'
  }, {
    name: 'Por cobrar',
    status: RoomStatusEnum.POR_COBRAR,
    count: 0,
    color: '#0AC917',
    colorClass: 'txt-success',
    icon: 'far fa-check-circle icon-cobrar',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }, {
    name: 'Preparada',
    status: RoomStatusEnum.PREPARADA,
    count: 0,
    color: '#0AC917',
    colorClass: 'txt-success',
    icon: 'far fa-check-circle icon-car fa-sm',
    isTextScrollable: false,
    iconExtraMargin: '-6px',
    class: 'reduce'
  }, {
    name: 'Ocupada',
    status: RoomStatusEnum.OCUPADA,
    count: 0,
    color: '#fd0022',
    colorClass: 'txt-danger',
    icon: 'far fa-check-circle icon-pareja-ocupada',
    isTextScrollable: false,
    iconExtraMargin: '-10px'
  }, {
    name: 'Room service',
    status: RoomStatusEnum.ROOM_SERVICE,
    count: 0,
    color: '#fd0022',
    colorClass: 'txt-danger',
    icon: 'far fa-check-circle icon-roomservice fa-2xs',
    isTextScrollable: false,
    iconExtraMargin: '-3px'
  }, {
    name: 'Sucia',
    status: RoomStatusEnum.SUCIA,
    count: 0,
    color: '#FFD500',
    colorClass: 'txt-warn',
    icon: 'far fa-check-circle fa-sm icon-sucia',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }, {
    name: 'Media Sucia',
    status: RoomStatusEnum.MEDIA_SUCIA,
    count: 0,
    color: '#e78300',
    colorClass: 'txt-orange',
    icon: 'far fa-check-circle fa-sm icon-sucia',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }, {
    name: 'Limpieza',
    status: RoomStatusEnum.EN_LIMPIEZA,
    count: 0,
    color: '#008deb',
    colorClass: 'txt-blue',
    icon: 'far fa-check-circle icon-limpieza',
    isTextScrollable: false,
    iconExtraMargin: '-10px'
  }, {
    name: 'Supervisi??n',
    status: RoomStatusEnum.EN_SUPERVISION,
    count: 0,
    color: '#008deb',
    colorClass: 'txt-blue',
    icon: 'far fa-check-circle icon-search',
    isTextScrollable: false,
    iconExtraMargin: '-10px'
  }, {
    name: 'Reservar',
    status: RoomStatusEnum.RESERVADA,
    count: 0,
    color: '#a703fb',
    colorClass: 'txt-purple',
    icon: 'icon-calendar',
    isTextScrollable: false,
    iconExtraMargin: '-7px'
  }, {
    name: 'Preparada y Reservada',
    status: RoomStatusEnum.RESERVADA_PREPARADA,
    count: 0,
    color: '#a703fb',
    colorClass: 'txt-purple',
    icon: 'icon-calendar',
    isTextScrollable: true,
    iconExtraMargin: '-7px'
  }, {
    name: 'Bloqueada',
    status: RoomStatusEnum.BLOQUEADA,
    count: 0,
    color: '#a703fb',
    colorClass: 'txt-purple',
    icon: 'far fa-check-circle icon-candado',
    isTextScrollable: false,
    iconExtraMargin: '-10px'
  }, {
    name: 'Mantenimiento',
    status: RoomStatusEnum.MANTENIMIENTO,
    count: 0,
    color: '#707070',
    colorClass: 'txt-grey-item',
    icon: 'far fa-check-circle icon-mantenimiento fa-sm',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }, {
    name: 'Alertas',
    status: RoomStatusEnum.LIBRE,
    count: 0,
    color: '#707070',
    colorClass: 'txt-grey-item',
    icon: 'fas fa-clock',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }]

  constructor(
    private readonly renderer: Renderer2,
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
    this.isIpadMini = window.innerWidth <= 1025;
    this.statusRoomsAll = this.statusRooms;
    this.search()
    this.isModalOpenSubs = this.modalService.isModalOpen$.subscribe((isOpen) => this.isModalOpen = isOpen)
    this.roomTypesService.roomStateCount$.subscribe((newCountState) => {
      this.countRoomState = {...newCountState}
      for(let [key, value] of Object.entries(newCountState)) {
        this.statusCountOptions(key as RoomStateCountKeys, value)
      }
      this.statusRooms = [...this.statusRooms]
    });

  }

  ngOnDestroy(): void {
    this.isModalOpenSubs.unsubscribe();
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
        this.desactivarBotones();
      }
    });

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isIpadMini = window.innerWidth <= 1025;
  }

  isAnimated(el: HTMLSpanElement): boolean {
    return el.classList.contains('scroll-text');
  }

  addAnimation(text: HTMLSpanElement, isTextScrollable: boolean) {
    if(isTextScrollable) {
      this.renderer.addClass(text, 'scroll-text')
    }
  }
  removeAnimation(text: HTMLSpanElement, isTextScrollable: boolean) {
    this.renderer.removeClass(text, 'scroll-text')
  }

  //busca los roles
  search() {

    this.filterText = new FormControl("");
    this.filterText.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((v) => {

        if (v) {
          const filter = new RegExp(v, "i");
          const filterFields = ["name"];
          this.statusRooms = this.statusRoomsAll.filter((role:any) =>
            filterFields.some((field) => filter.test(role[field]))
          );

        } else {
          this.statusRooms = this.statusRoomsAll;
        }
      });
  }

  filtrarHabitaciones(statusRoom: any) {
    if(statusRoom.name === 'Alertas') {
      return this.roomService.updateFiltradoHabitacion('expirada');  
    }
    this.roomService.updateFiltradoHabitacion((statusRoom.status as RoomStatusEnum));
  }

  activarBoton(color: string, index: number) {
    this.desactivarBotones();
    const buttonToActive = this.roomTypesRef.toArray().find((roomTypeEl) => {
      return roomTypeEl.nativeElement.id === 'roomType_' + index;
    })?.nativeElement
    this.renderer.setStyle(buttonToActive, 'color', 'white');
    this.renderer.setStyle(buttonToActive, 'background-color', color);
  }

  desactivarBotones() {
    this.roomTypesRef.toArray().forEach((roomTypeEl, index) => {
      this.desactivarBoton(roomTypeEl.nativeElement);
    });
  }

  desactivarBoton(element: HTMLButtonElement) {
    this.renderer.removeStyle(element, 'color');
    this.renderer.removeStyle(element, 'background-color');
  }
}
