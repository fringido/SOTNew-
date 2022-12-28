import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../home/services/home/home.service';
import { SidebarState } from './interfaces/sidebar-state.interface';
import { SidebarService } from './services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {

  sidebarStateSubs!: Subscription;
  sidebarState!: SidebarState;

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly homeService: HomeService,
    ) { }

  ngOnInit(): void {
    this.sidebarStateSubs = this.sidebarService.sidebarState$.subscribe((state) => {
      this.sidebarState = state;
    });
  }

  ngOnDestroy(): void {
    this.sidebarStateSubs.unsubscribe();
  }

  toggle() {
    this.homeService.toggleSidenav();
  }

  selectMenu(state: 'home' | 'admin' | 'burguer') {
    if (state === 'home') {
      return this.sidebarService.setSidebarState('home')
    }
    if (state === 'admin') {
      return this.sidebarService.setSidebarState('admin')
    }
    if (state === 'burguer') {
      return this.sidebarService.setSidebarState('hamburguesa')
    }
  }


}
