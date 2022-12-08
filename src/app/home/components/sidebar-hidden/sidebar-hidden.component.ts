import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-sidebar-hidden',
  templateUrl: './sidebar-hidden.component.html',
  styleUrls: ['./sidebar-hidden.component.scss']
})
export class SidebarHiddenComponent implements OnInit {

  statusRooms = [
    { name: 'Libre', count: 10, color: 'sot-bg-success', icon: 'far fa-check-circle', isTextScrollable: false },
    { name: 'Por cobrar', count: 10, color: 'sot-bg-success', icon: 'far fa-check-circle icon-cobrar', isTextScrollable: true },
    { name: 'Preparada', count: 10, color: 'sot-bg-success', icon: 'far fa-check-circle icon-car mr3px fa-xs', isTextScrollable: false },
    { name: 'Ocupada', count: 10, color: 'sot-bg-danger', icon: 'far fa-check-circle icon-pareja-ocupada', isTextScrollable: false },
    { name: 'Room service', count: 10, color: 'sot-bg-danger', icon: 'far fa-check-circle icon-roomservice fa-2xs mr5px', isTextScrollable: true },
    { name: 'Sucia', count: 10, color: 'sot-bg-warn', icon: 'far fa-check-circle icon-sucia', isTextScrollable: false },
    { name: 'Media Sucia', count: 10, color: 'sot-bg-orange', icon: 'far fa-check-circle icon-sucia', isTextScrollable: true },
    { name: 'Limpieza', count: 10, color: 'sot-bg-blue', icon: 'far fa-check-circle icon-limpieza', isTextScrollable: false },
    { name: 'Supervisión', count: 10, color: 'sot-bg-blue', icon: 'far fa-check-circle icon-search', isTextScrollable: false },
    { name: 'Reservar', count: 10, color: 'sot-bg-purple', icon: 'icon-calendar', isTextScrollable: false },
    { name: 'Preparada y Reservada', count: 10, color: 'sot-bg-purple', icon: 'icon-calendar', isTextScrollable: true },
    { name: 'Bloqueada', count: 10, color: 'sot-bg-purple', icon: 'far fa-check-circle icon-candado', isTextScrollable: false },
    { name: 'Mantenimiento', count: 10, color: 'sot-bg-grey-item', icon: 'far fa-check-circle icon-mantenimiento', isTextScrollable: true },
    { name: 'Alertas', count: 10, color: 'sot-bg-grey-item', icon: 'fas fa-clock', isTextScrollable: false },
  ]
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.homeService.toggleSidenav();
  }

}
