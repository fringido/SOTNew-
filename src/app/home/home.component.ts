import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // si no oculta del todo u oculta de más, recordar recargar la pantalla al cambiar de resolución
    trigger('openClose', [
      state('open', style({
        'margin-left': '0px',
      })),
      state('closed', style({
        // TODO: cambiar porcentaje a vw
        'margin-left': window.innerWidth < 1025 ? '-23%' : '-15%',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {

  display = true;

  constructor(
    private readonly homeService: HomeService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  isOpen$ = this.homeService.isSidenavOpen$;

  toggle() {
    this.homeService.toggleSidenav();
  }

  openModal(ruta: string){
    this.display = !this.display

  }
}
