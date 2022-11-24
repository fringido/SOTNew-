import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  constructor(
    private readonly homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  close(){

  }

  isOpen$ = this.homeService.isSidenavOpen$;

  toggle() {
    this.homeService.toggleSidenav();
  }
}
