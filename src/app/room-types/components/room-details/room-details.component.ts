import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/sidebar/services/sidebar/sidebar.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {

  constructor(
    private readonly sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
  }

  unselectRoom() {
    this.sidebarService.setSidebarState('home')
  }
}
