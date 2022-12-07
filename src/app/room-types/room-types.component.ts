import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../home/services/home/home.service';
import { RoomStatusEnum } from './enums/room-status.enum';
@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.scss']
})
export class RoomTypesComponent implements OnInit, OnDestroy {

  statusRoom = RoomStatusEnum;
  isShowingSidenav!: boolean;
  isShowingSidenavSubs!: Subscription;

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
    this.isShowingSidenavSubs = this.homeService.showSidenav$.subscribe(
      (isShowing) => this.isShowingSidenav = isShowing
    )
  }

  ngOnDestroy(): void {
    this.isShowingSidenavSubs.unsubscribe();
  }

  marginXSkySuite() {
    if(this.isIpadMini) {
      return '0vw';
    }
    if(this.isShowingSidenav) {
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
