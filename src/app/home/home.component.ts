import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HomeService } from './services/home/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  showSidenav = this.homeService.showSidenav$;

  constructor(
    private readonly router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  }


  openModal(ruta: string){
    this.router.navigate([`/hotel/${ruta}`]);
  }
}
