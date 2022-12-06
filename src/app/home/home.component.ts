import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HomeService } from './services/home/home.service';

import { Router } from '@angular/router';
import { ModalService } from '../core/services/modal.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, AfterViewInit {

  showSidenav = this.homeService.showSidenav$;
  display: boolean = false;
  header:boolean = true;

  constructor(
    private modal: ModalService,
    private readonly router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.modalFuncion();
  }

  modalFuncion(){
    this.modal.close()

    this.modal.isModalOpen$.subscribe(d => {
      this.display = d
    })

    this.modal.isShowHeader$.subscribe(d => {
      this.header = d
    })
  }

  ngAfterViewInit() {
    this.modal.close()
  }

  toggle() {
    this.homeService.toggleSidenav();
  }

  openModal(ruta: string){
    this.modal.open()
    this.router.navigate([`/hotel/${ruta}`]);
  }
}
