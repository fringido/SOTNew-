import { AfterViewInit, Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { SidebarService } from '../../../sidebar/services/sidebar/sidebar.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {

  public isCollapsed = {
    data: true,
    details: true,
    roomService: true
  };

  selectedRoom$ = this.sidebarService.selectedRoom$;

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.sidebarService.selectedRoom$.subscribe((room) => console.log({room}))
  }

  exit() {
    this.sidebarService.setSidebarState('home')
  }

  updateCollapsed(att: 'data' | 'details' | 'roomService') {
    console.log(this.isCollapsed[att])
    this.isCollapsed[att] = !this.isCollapsed[att]
    this.isCollapsed = {...this.isCollapsed};
  }
}
