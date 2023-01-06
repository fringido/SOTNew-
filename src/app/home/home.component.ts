import {  Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { HomeService } from './services/home/home.service';
import { Router } from '@angular/router';
import { GetAllRoomsGQL, GetAllRoomsQuery } from '../core/graphQL/serviciosGraph';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @ViewChild('LogoutButton') LogoutButton!: ElementRef;
  @ViewChild('LogoutText') LogoutText!: ElementRef;
  showSidenav = this.homeService.showSidenav$;


  habitaciones: Observable<GetAllRoomsQuery['habitaciones']>

  isShowingLogoutText:boolean = false;
  isLogoutFirstTap: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly renderer: Renderer2,
    private homeService: HomeService,
    getAllRooms: GetAllRoomsGQL
  ) {
    this.habitaciones = getAllRooms.watch().valueChanges.pipe(map(result => result.data.habitaciones))
  }

  ngOnInit(): void {

    console.log(this.habitaciones)
  }

  showLogoutText() {
    this.renderer.addClass(this.LogoutButton.nativeElement, 'show-text')
    this.renderer.removeClass(this.LogoutButton.nativeElement, 'hide-text')
    this.renderer.removeClass(this.LogoutText.nativeElement, 'd-none')
  }

  hideLogoutText() {
    this.renderer.removeClass(this.LogoutButton.nativeElement, 'show-text')
    this.renderer.addClass(this.LogoutButton.nativeElement, 'hide-text')
    this.renderer.addClass(this.LogoutText.nativeElement, 'd-none')
  }

  openModal(ruta: string){
    this.router.navigate([`/hotel/${ruta}`]);
  }
}
