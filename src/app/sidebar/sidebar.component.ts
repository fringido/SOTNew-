import { Component, OnInit } from '@angular/core';
import { SidebarService } from './services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  sidebarState$ = this.sidebarService.sidebarState$;

  constructor(
    private readonly sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
  }



}
