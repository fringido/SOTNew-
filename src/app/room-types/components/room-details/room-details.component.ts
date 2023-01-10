import { Component, HostListener, OnDestroy, OnInit, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { ModalService } from 'src/app/core/services/modal.service';
import { SidebarService } from '../../../sidebar/services/sidebar/sidebar.service';
import { RoomStatusEnum } from '../../enums/room-status.enum';
import { RoomService } from '../../services/room/room.service';
import { ConfimModalMessageComponent } from '../../../core/components/confim-modal-message/confim-modal-message.component';
import { SessionStorageService } from 'src/app/core/services/sessionStorage/session-storage.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit, OnDestroy {

  authMode = {
    cancelarBloqueo: false
  }

  readonly AvailableRoomStatus = RoomStatusEnum;
  display: boolean = false;
  public isCollapsed = {
    data: false,
    details: false,
    roomService: false
  };

  // Variables provisionales la habitacion seleccionada se va a obtener por medio de los params en la ruta
  selectedRoom!: any;
  selectedRoomSubs!: Subscription;

  isModoCambioHabitacion!: any;
  isModoCambioHabitacionSubs!: Subscription;

  isModalOpen!: boolean;
  isModalOpenSubs!: Subscription;

  constructor(
    private readonly renderer: Renderer2,
    private readonly router: Router,
    public dialogService: DialogService,
    private modalService: ModalService,
    private readonly sidebarService: SidebarService,
    private readonly roomService: RoomService,
    private readonly sessionStorageService: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.selectedRoomSubs = this.sidebarService.selectedRoom$.subscribe((room) => {
      this.selectedRoom = room
    });
    this.isModoCambioHabitacionSubs = this.roomService.modoAppHabitacion$.subscribe((state) => {
      this.isModoCambioHabitacion = state.cambio;
    });
    this.isModalOpenSubs = this.modalService.isModalOpen$.subscribe((isOpen) => this.isModalOpen = isOpen)
  }

  ngOnDestroy(): void {
    this.selectedRoomSubs.unsubscribe();
    this.isModalOpenSubs.unsubscribe();
    this.isModoCambioHabitacionSubs.unsubscribe();
  }


  @HostListener('document:keydown', ['$event'])
  onEscapeHandler(event: KeyboardEvent) {
    if(event.key !== 'Escape' || this.isModalOpen) {
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
    this.roomService.updateSelectedRoom({
      ...this.selectedRoom,
      status: RoomStatusEnum.PREPARADA
    });
  }

  confirmarReservacion(){
    const ref = this.dialogService.open(MessageModalAutoclosableComponent, {
      data: {
        message: 'SE HA CONFIRMADO LA RESERVACIÓN'
      },
    });
    this.roomService.updateSelectedRoom({
      ...this.selectedRoom,
      status: RoomStatusEnum.RESERVADA_PREPARADA
    });
  }

  salida() {
    const ref = this.dialogService.open(ConfimModalMessageComponent, {
      data: {
        message: '¿Estás seguro que quieres salir de la habitación?',
        withVideoButton: true
      },
    });

    ref.onClose.subscribe(({confirmed}) => {
      if(!confirmed) {
        return;
      }
      this.router.navigate(['/hotel/salida/enviar-limpieza'])
    });

  }

  togggleModoCambioHabitacion(active?: boolean) {
    this.roomService.updateModoAppHabitacion({cambio: active ?? !this.isModoCambioHabitacion});
  }

  openModal(rute: string){
    this.router.navigate([`hotel/${rute}`])
  }

  cancelarBloqueo() {
    const ref = this.dialogService.open(ConfimModalMessageComponent, {
      data: {
        message: '¿Estás seguro de querer cancelar el deshabilitado de la habitación?',
      },
    });

    ref.onClose.subscribe(({confirmed}) => {
      if(!confirmed) {
        return;
      }
      this.authMode.cancelarBloqueo = true;
    });
  }

  cancelarBloqueoAutenticado() {
    this.authMode.cancelarBloqueo = false;
    this.roomService.updateSelectedRoom({
      ...this.selectedRoom,
      status: RoomStatusEnum.LIBRE
    })
  }

  cancelarHabitacion() {
    this.router.navigate(['hotel', 'rentaHabitacion', 'cancelarHabitacion']);
    
  }

  cancelarEntrada() {

  }
}
