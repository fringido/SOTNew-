import {  Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { HomeService } from './services/home/home.service';
import { Router } from '@angular/router';
import { GetAllRoomsGQL, GetAllRoomsQuery ,Habitacion} from '../core/graphQL/serviciosGraph';
import { map, Observable } from 'rxjs';
import { ObtenerHabitacionesService } from '../core/services/habitaciones/obtener-habitaciones.service';
import { SuscripcionEstadoHabitacionService } from '../core/services/habitaciones/suscripcion-estado-habitacion.service';
import { Apollo, gql } from 'apollo-angular';

const SISCRIPCION = gql`
    subscription  checkHabitaciones {
      checkHabitaciones{
      numeroHabitacion
    }
  }

`

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @ViewChild('LogoutButton') LogoutButton!: ElementRef;
  @ViewChild('LogoutText') LogoutText!: ElementRef;
  showSidenav = this.homeService.showSidenav$;


  habitaciones: any
  idHabitacion: string = "5EB0DE9C-C687-ED11-A975-005056AFA94B"

  isShowingLogoutText:boolean = false;
  isLogoutFirstTap: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly renderer: Renderer2,
    private homeService: HomeService,
    private habitacionesService: ObtenerHabitacionesService,
    apollo: Apollo
  ) {
    apollo.subscribe({
      query: SISCRIPCION
    }).subscribe((result) => {
      console.log(result)
      this.habitaciones = result
    })
  }

  ngOnInit(): void {
    console.log(this.habitaciones)
    this.habitacionesService.getHabitaciones();
    this.habitacionesService.getHabitacio(this.idHabitacion);
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
