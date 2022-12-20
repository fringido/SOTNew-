import { Component, HostListener, OnDestroy, OnInit, Renderer2} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { ConfimModalMessageComponent } from 'src/app/core/components/confim-modal-message/confim-modal-message.component';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { SidebarService } from '../../../sidebar/services/sidebar/sidebar.service';
import { RoomStatusEnum } from '../../enums/room-status.enum';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit, OnDestroy {

  readonly AvailableRoomStatus = RoomStatusEnum;
  display: boolean = false;
  public isCollapsed = {
    data: false,
    details: false,
    roomService: false
  };

  selectedRoom!: any;
  selectedRoomSubs!: Subscription;

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly renderer: Renderer2,
    private readonly router: Router,
    public dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.selectedRoomSubs = this.sidebarService.selectedRoom$.pipe().subscribe((room) => {
      this.selectedRoom = room
    });
  }

  ngOnDestroy(): void {
    this.selectedRoomSubs.unsubscribe();
  }


  @HostListener('document:keydown', ['$event']) 
  onEscapeHandler(event: KeyboardEvent) {
    if(event.key !== 'Escape') {
      return;
    }
    // si no se está mostrando una ruta en forma de modal se cancela la deselección de la habitacion
    if(this.router.routerState.snapshot.url === '/hotel') {
      this.exit();
    }
  }

  exit() {
    this.sidebarService.setSidebarState('home')
  }

  entrada() {
    const ref = this.dialogService.open(MessageModalAutoclosableComponent, {
      data: {
        message: 'SE HA DADO ENTRADA DE FORMA EXITOSA'
      },
    });
  }

  openRentaHabitacion() {
    this.router.navigate(['hotel', 'rentaHabitacion'])
  }
  openRentaExtraHabitacion() {
    this.router.navigate(['hotel', 'rentaHabitacion', 'pagoExtraRenta']);
  }
  openCobroPendiente() {
    this.router.navigate(['hotel', 'rentaHabitacion', 'cobroPendiente']);
  }
  openCambioHabitacion() {
    const ref = this.dialogService.open(ConfimModalMessageComponent, {
      data: {
        message: 'SE HA DADO ENTRADA DE FORMA EXITOSA'
      },
    });
  }

}
