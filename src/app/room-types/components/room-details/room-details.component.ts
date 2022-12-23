import { Component, HostListener, OnDestroy, OnInit, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { SidebarService } from '../../../sidebar/services/sidebar/sidebar.service';
import { RoomStatusEnum } from '../../enums/room-status.enum';
import { RoomService } from '../../services/room/room.service';

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

  isModoCambioHabitacion!: any;
  isModoCambioHabitacionSubs!: Subscription;

  constructor(
    private readonly renderer: Renderer2,
    private readonly router: Router,
    public dialogService: DialogService,
    private readonly sidebarService: SidebarService,
    private readonly roomService: RoomService,
  ) { }

  ngOnInit(): void {
    this.selectedRoomSubs = this.sidebarService.selectedRoom$.subscribe((room) => {
      this.selectedRoom = room
    });
    this.isModoCambioHabitacionSubs = this.roomService.modoAppHabitacion$.subscribe((state) => {
      this.isModoCambioHabitacion = state.cambio;
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
    this.exit();

  }

  exit() {
    if(this.isModoCambioHabitacion) {
      return this.togggleModoCambioHabitacion(false);
    }
    if(this.router.routerState.snapshot.url === '/hotel') {
    this.sidebarService.setSidebarState('home')
    }
  }

  entrada() {
    const ref = this.dialogService.open(MessageModalAutoclosableComponent, {
      data: {
        message: 'SE HA DADO ENTRADA DE FORMA EXITOSA'
      },
    });
  }

  togggleModoCambioHabitacion(active?: boolean) {
    this.roomService.updateModoAppHabitacion({cambio: active ?? !this.isModoCambioHabitacion});
  }

  openModal(rute: string){
    this.router.navigate([`hotel/${rute}`])
  }

}
