import { Component, OnInit } from '@angular/core';
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
    { name: 'Preparada', count: 10, color: 'success', icon: 'far fa-check-circle icon-car', isTextScrollable: false }
    // TODO: terminar el arreglo de tipos de habitacion
  ]

  constructor(
    private readonly homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  close() {

  }

  isOpen$ = this.homeService.isSidenavOpen$;

  toggle() {
    this.homeService.toggleSidenav();
  }

  log(event: any) {
    console.log(event)
    console.log({ home: this.isHomeMenuSelected, admin: this.isAdminMenuSelected, burguer: this.isBurguerMenuSelected });
  }

  selectMenu(state: 'home' |
    'admin' |
    'burguer') {
    if (state === 'home') {
      this.isHomeMenuSelected = true;
      this.isAdminMenuSelected = false;
      this.isBurguerMenuSelected = false;
    }
    if (state === 'admin') {
      this.isHomeMenuSelected = false;
      this.isAdminMenuSelected = true;
      this.isBurguerMenuSelected = false;
    }
    if (state === 'burguer') {
      this.isHomeMenuSelected = false;
      this.isAdminMenuSelected = false;
      this.isBurguerMenuSelected = true;
    }
  }
}
