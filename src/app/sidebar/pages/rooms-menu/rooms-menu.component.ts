import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChildren, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ModalService } from 'src/app/core/services/modal.service';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { RoomService } from 'src/app/room-types/services/room/room.service';

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
  

  statusRooms = [{
    name: 'Libre',
    status: RoomStatusEnum.LIBRE,
    count: 10,
    color: '#0AC917',
    colorClass: 'txt-success',
    icon: 'far fa-check-circle',
    isTextScrollable: false,
    iconExtraMargin: '-5px'
  }, {
    name: 'Por cobrar',
    status: RoomStatusEnum.POR_COBRAR,
    count: 10,
    color: '#0AC917',
    colorClass: 'txt-success',
    icon: 'far fa-check-circle icon-cobrar',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }, {
    name: 'Preparada',
    status: RoomStatusEnum.PREPARADA,
    count: 10,
    color: '#0AC917',
    colorClass: 'txt-success',
    icon: 'far fa-check-circle icon-car fa-sm',
    isTextScrollable: false,
    iconExtraMargin: '-6px',
    class: 'reduce'
  }, {
    name: 'Ocupada',
    status: RoomStatusEnum.OCUPADA,
    count: 10,
    color: '#fd0022',
    colorClass: 'txt-danger',
    icon: 'far fa-check-circle icon-pareja-ocupada',
    isTextScrollable: false,
    iconExtraMargin: '-10px'
  }, {
    name: 'Room service',
    status: RoomStatusEnum.ROOM_SERVICE,
    count: 10,
    color: '#fd0022',
    colorClass: 'txt-danger',
    icon: 'far fa-check-circle icon-roomservice fa-2xs',
    isTextScrollable: false,
    iconExtraMargin: '-3px'
  }, {
    name: 'Sucia',
    status: RoomStatusEnum.SUCIA,
    count: 10,
    color: '#FFD500',
    colorClass: 'txt-warn',
    icon: 'far fa-check-circle fa-sm icon-sucia',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }, {
    name: 'Media Sucia',
    status: RoomStatusEnum.MEDIA_SUCIA,
    count: 10,
    color: '#e78300',
    colorClass: 'txt-orange',
    icon: 'far fa-check-circle fa-sm icon-sucia',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }, {
    name: 'Limpieza',
    status: RoomStatusEnum.EN_LIMPIEZA,
    count: 10,
    color: '#008deb',
    colorClass: 'txt-blue',
    icon: 'far fa-check-circle icon-limpieza',
    isTextScrollable: false,
    iconExtraMargin: '-10px'
  }, {
    name: 'Supervisión',
    status: RoomStatusEnum.EN_SUPERVISION,
    count: 10,
    color: '#008deb',
    colorClass: 'txt-blue',
    icon: 'far fa-check-circle icon-search',
    isTextScrollable: false,
    iconExtraMargin: '-10px'
  }, {
    name: 'Reservar',
    status: RoomStatusEnum.LIBRE,
    count: 10,
    color: '#a703fb',
    colorClass: 'txt-purple',
    icon: 'icon-calendar',
    isTextScrollable: false,
    iconExtraMargin: '-7px'
  }, {
    name: 'Preparada y Reservada',
    status: RoomStatusEnum.LIBRE,
    count: 10,
    color: '#a703fb',
    colorClass: 'txt-purple',
    icon: 'icon-calendar',
    isTextScrollable: true,
    iconExtraMargin: '-7px'
  }, {
    name: 'Bloqueada',
    status: RoomStatusEnum.LIBRE,
    count: 10,
    color: '#a703fb',
    colorClass: 'txt-purple',
    icon: 'far fa-check-circle icon-candado',
    isTextScrollable: false,
    iconExtraMargin: '-10px'
  }, {
    name: 'Mantenimiento',
    status: RoomStatusEnum.MANTENIMIENTO,
    count: 10,
    color: '#707070',
    colorClass: 'txt-grey-item',
    icon: 'far fa-check-circle icon-mantenimiento fa-sm',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }, {
    name: 'Alertas',
    status: RoomStatusEnum.LIBRE,
    count: 10,
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
  ) { }

  ngOnInit(): void {
    this.isIpadMini = window.innerWidth <= 1025;
    this.statusRoomsAll = this.statusRooms;
    this.search()
    this.isModalOpenSubs = this.modalService.isModalOpen$.subscribe((isOpen) => this.isModalOpen = isOpen)

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

  filtrarHabitaciones(estadoHab: RoomStatusEnum) {
    this.roomService.updateFiltradoHabitacion(estadoHab);
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
