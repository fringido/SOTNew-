import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-rooms-menu',
  templateUrl: './rooms-menu.component.html',
  styleUrls: ['./rooms-menu.component.scss']
})
export class RoomsMenuComponent implements OnInit {

  isIpadMini!: boolean;

  statusRooms = [{ 
    name: 'Libre', 
    count: 10,
    color: 'txt-success', 
    icon: 'far fa-check-circle', 
    isTextScrollable: false,
    iconExtraMargin: '-5px'
  }, { 
    name: 'Por cobrar',
    count: 10, 
    color: 'txt-success',
    icon: 'far fa-check-circle icon-cobrar',
    isTextScrollable: false,
    iconExtraMargin: '-8px' 
  }, { 
    name: 'Preparada',
    count: 10,
    color: 'txt-success',
    icon: 'far fa-check-circle icon-car fa-sm',
    isTextScrollable: false,
    iconExtraMargin: '-6px',
    class: 'reduce'
  }, { 
    name: 'Ocupada',
    count: 10,
    color: 'txt-danger',
    icon: 'far fa-check-circle icon-pareja-ocupada',
    isTextScrollable: false,
    iconExtraMargin: '-10px'
  }, { 
    name: 'Room service',
    count: 10,
    color: 'txt-danger',
    icon: 'far fa-check-circle icon-roomservice fa-2xs',
    isTextScrollable: false,
    iconExtraMargin: '-3px' 
  }, { 
    name: 'Sucia',
    count: 10,
    color: 'txt-warn',
    icon: 'far fa-check-circle fa-sm icon-sucia',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }, {
    name: 'Media Sucia',
    count: 10,
    color: 'txt-orange',
    icon: 'far fa-check-circle fa-sm icon-sucia',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }, {
    name: 'Limpieza',
    count: 10,
    color: 'txt-blue',
    icon: 'far fa-check-circle icon-limpieza',
    isTextScrollable: false,
    iconExtraMargin: '-10px'
  }, {
    name: 'Supervisión', 
    count: 10, 
    color: 'txt-blue',
    icon: 'far fa-check-circle icon-search',
    isTextScrollable: false,
    iconExtraMargin: '-10px'
  }, {
    name: 'Reservar',
    count: 10,
    color: 'txt-purple',
    icon: 'icon-calendar',
    isTextScrollable: false,
    iconExtraMargin: '-7px'
  }, {
    name: 'Preparada y Reservada',
    count: 10,
    color: 'txt-purple',
    icon: 'icon-calendar',
    isTextScrollable: true,
    iconExtraMargin: '-7px'
  }, { 
    name: 'Bloqueada',
    count: 10,
    color: 'txt-purple',
    icon: 'far fa-check-circle icon-candado',
    isTextScrollable: false,
    iconExtraMargin: '-10px'
  }, {
    name: 'Mantenimiento',
    count: 10,
    color: 'txt-grey-item',
    icon: 'far fa-check-circle icon-mantenimiento fa-sm',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }, {
    name: 'Alertas',
    count: 10,
    color: 'txt-grey-item',
    icon: 'fas fa-clock',
    isTextScrollable: false,
    iconExtraMargin: '-8px'
  }]

  constructor(
    private readonly renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.isIpadMini = window.innerWidth <= 1025;
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
}
