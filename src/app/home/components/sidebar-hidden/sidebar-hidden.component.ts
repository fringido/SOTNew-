import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-sidebar-hidden',
  templateUrl: './sidebar-hidden.component.html',
  styleUrls: ['./sidebar-hidden.component.scss']
})
export class SidebarHiddenComponent implements OnInit {

  roomTypes = [
    { name: 'Libre', count: 10, color: 'success', icon: 'far fa-check-circle' },
    { name: 'Por cobrar', count: 10, color: 'success', icon: 'far fa-check-circle icon-cobrar' },
    { name: 'Preparada', count: 10, color: 'success', icon: 'far fa-check-circle icon-car' },
    { name: 'Ocupada', count: 10, color: 'danger', icon: 'far fa-check-circle icon-pareja-ocupada' },
    { name: 'Room service', count: 10, color: 'danger', icon: 'far fa-check-circle icon-roomservice fa-2xs' },
    { name: 'Sucia', count: 10, color: 'warn', icon: 'far fa-check-circle icon-sucia' },
    { name: 'Media Sucia', count: 10, color: 'orange', icon: 'far fa-check-circle icon-sucia' },
    { name: 'Limpieza', count: 10, color: 'blue', icon: 'far fa-check-circle icon-limpieza' },
    { name: 'Supervisión', count: 10, color: 'blue', icon: 'far fa-check-circle icon-search' },
    { name: 'Reservar', count: 10, color: 'purple', icon: 'icon-calendar' },
    { name: 'Preparada y Reservada', count: 10, color: 'purple', icon: 'icon-calendar' },
    { name: 'Bloqueada', count: 10, color: 'purple', icon: 'far fa-check-circle icon-candado' },
    { name: 'Mantenimiento', count: 10, color: 'grey-item', icon: 'far fa-check-circle icon-mantenimiento' },
    { name: 'Alertas', count: 10, color: 'grey-item', icon: 'fas fa-clock' },
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
