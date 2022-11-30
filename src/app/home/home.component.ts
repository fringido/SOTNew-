import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HomeService } from './services/home/home.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  showSidenav = this.homeService.showSidenav$;

  constructor(
    private readonly homeService: HomeService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
