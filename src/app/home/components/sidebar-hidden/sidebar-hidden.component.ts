import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-sidebar-hidden',
  templateUrl: './sidebar-hidden.component.html',
  styleUrls: ['./sidebar-hidden.component.scss']
})
export class SidebarHiddenComponent implements OnInit {

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.homeService.toggleSidenav();
  }

}
