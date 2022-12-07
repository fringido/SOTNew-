import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/services/home/home.service';
import { SidebarService } from './services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  sidebarState$ = this.sidebarService.sidebarState$;

  isHomeMenuSelected = true;
  isAdminMenuSelected = false;
  isBurguerMenuSelected = false;

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly homeService: HomeService,
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
