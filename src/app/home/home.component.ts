import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // si no oculta del todo u oculta de más, recordar recargar la pantalla al cambiar de resolución
    trigger('openCloseSidenav', [
      state('open', style({
        'margin-left': '0px',
      })),
      state('closed', style({
        // TODO: cambiar porcentaje a vw
        'margin-left': window.innerWidth < 1025 ? '-24vw' : '-15.1vw',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
    trigger('openCloseSidenavButtons', [
      state('open', style({
        'margin-left': window.innerWidth < 1025 ? '23vw' : '14.5vw',
      })),
      state('closed', style({
        // TODO: cambiar porcentaje a vw
        'margin-left': '0px',
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {

  // display = true;

  constructor(
    private readonly homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  isOpen$ = this.homeService.isSidenavOpen$;

  toggle() {
    this.homeService.toggleSidenav();
  }
}
