import { AfterViewInit, Component, OnInit } from '@angular/core';
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

  constructor(
    private modal: ModalService,
    private readonly router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }

  openModal(ruta: string){
    //this.display = true
    // this.modal.open()
    this.router.navigateByUrl(`hotel/${ruta}`);
  }
}
