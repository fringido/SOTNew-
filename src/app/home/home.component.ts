import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HomeService } from './services/home/home.service';
import { MatDrawer } from '@angular/material/sidenav';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { ModalService } from '../core/services/modal.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, AfterViewInit {

  showSidenav = this.homeService.showSidenav$;

  constructor(
    private modal: ModalService,
    private readonly router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }

  toggle() {
    this.homeService.toggleSidenav();
  }

  openModal(ruta: string){
    //this.display = true
    // this.modal.open()
    this.router.navigateByUrl(`hotel/${ruta}`);
  }
}
