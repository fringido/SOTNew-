import { Component, OnInit } from '@angular/core';
import { delay, switchMap, tap } from 'rxjs';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  isHomeMenuSelected = true;
  isAdminMenuSelected = false;
  isBurguerMenuSelected = false;

  roomTypes = [
    { name: 'Libre', count: 10, color: 'success', icon: 'far fa-check-circle', isTextScrollable: false },
    { name: 'Por cobrar', count: 10, color: 'success', icon: 'far fa-check-circle icon-cobrar', isTextScrollable: false },
    { name: 'Preparada', count: 10, color: 'success', icon: 'far fa-check-circle icon-car', isTextScrollable: false },
    { name: 'Ocupada', count: 10, color: 'danger', icon: 'far fa-check-circle icon-pareja-ocupada', isTextScrollable: false },
    { name: 'Room service', count: 10, color: 'danger', icon: 'far fa-check-circle icon-roomservice fa-2xs', isTextScrollable: true },
    { name: 'Sucia', count: 10, color: 'warn', icon: 'far fa-check-circle icon-sucia', isTextScrollable: false },
    { name: 'Media Sucia', count: 10, color: 'orange', icon: 'far fa-check-circle icon-sucia', isTextScrollable: true },
    { name: 'Limpieza', count: 10, color: 'blue', icon: 'far fa-check-circle icon-limpieza', isTextScrollable: false },
    { name: 'Supervisión', count: 10, color: 'blue', icon: 'far fa-check-circle icon-search', isTextScrollable: false },
    { name: 'Reservar', count: 10, color: 'purple', icon: 'icon-calendar', isTextScrollable: false },
    { name: 'Preparada y Reservada', count: 10, color: 'purple', icon: 'icon-calendar', isTextScrollable: true },
    { name: 'Bloqueada', count: 10, color: 'purple', icon: 'far fa-check-circle icon-candado', isTextScrollable: false },
    { name: 'Mantenimiento', count: 10, color: 'grey-item', icon: 'far fa-check-circle icon-mantenimiento', isTextScrollable: true },
    { name: 'Alertas', count: 10, color: 'grey-item', icon: 'fas fa-clock', isTextScrollable: false },
  ]

  constructor(
    private readonly homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.homeService.toggleSidenav();
  }

  selectMenu(state: 'home' | 'admin' | 'burguer') {
    if (state === 'home') {
      this.isHomeMenuSelected = true;
      this.isAdminMenuSelected = false;
      this.isBurguerMenuSelected = false;
      return;
    }
    if (state === 'admin') {
      this.isHomeMenuSelected = false;
      this.isAdminMenuSelected = true;
      this.isBurguerMenuSelected = false;
      return;
    }
    if (state === 'burguer') {
      this.isHomeMenuSelected = false;
      this.isAdminMenuSelected = false;
      this.isBurguerMenuSelected = true;
      return;
    }
  }
}
