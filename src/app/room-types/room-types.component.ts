import { Component, HostListener, OnInit } from '@angular/core';
import { HomeService } from '../home/services/home/home.service';
import { RoomStatusEnum } from './enums/room-status.enum';
@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.scss']
})
export class RoomTypesComponent implements OnInit {

  statusRoom = RoomStatusEnum;
  showSidenav!: boolean;

  isIpadMini!: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isIpadMini = window.innerWidth <= 1025;
  }


  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.isIpadMini = window.innerWidth <= 1025;
    this.homeService.showSidenav$.subscribe((isShowing) => this.showSidenav = isShowing)
  }

  marginXSkySuite() {
    if(this.isIpadMini) {
      return '0vw';
    }
    if(this.showSidenav) {
      return '-58.5vh';
    }
    return '-65.5vh';
  }

  marginYSkySuite() {
    if(this.isIpadMini) {
      return '-13.5vh';
    }
    return '6vh';
  }

}
