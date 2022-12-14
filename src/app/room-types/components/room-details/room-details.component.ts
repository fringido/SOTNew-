import { Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { ModalService } from 'src/app/core/services/modal.service';
import { SidebarService } from '../../../sidebar/services/sidebar/sidebar.service';
import { RoomStatusEnum } from '../../enums/room-status.enum';
import { RoomService } from '../../services/room/room.service';
import { ConfimModalMessageComponent } from '../../../core/components/confim-modal-message/confim-modal-message.component';
import { MutarEstadoHabitacionService } from 'src/app/core/services/habitaciones/mutar-estado-habitacion.service';
import { SuscripcionEstadoHabitacionService } from 'src/app/core/services/habitaciones/suscripcion-estado-habitacion.service';

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
    private readonly router: Router,
    public dialogService: DialogService,
    private modalService: ModalService,
    private readonly sidebarService: SidebarService,
    private readonly roomService: RoomService,
    private mutarEstado: MutarEstadoHabitacionService,
  ) { }


  ngOnInit(): void {
    this.selectedRoomSubs = this.roomService.selectedRoom$.subscribe((room) => {
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
    // si no se est?? mostrando una ruta en forma de modal se cancela la deselecci??n de la habitacion
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
    const id = '5EB0DE9C-C687-ED11-A975-005056AFA94B'
    const estado = 'Preparada'
    this.mutarEstado.cambiarEstado(id,estado)

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
        message: 'SE HA CONFIRMADO LA RESERVACI??N'
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
        message: '??Est??s seguro que quieres salir de la habitaci??n?',
        withVideoButton: true
      },
    });

    ref.onClose.subscribe(({confirmed}) => {
      if(!confirmed) {
        return;
      }
      this.router.navigate([`/hotel/salida/enviarLimpieza/${this.selectedRoom.roomNumber}`])
    });

  }

  togggleModoCambioHabitacion(active?: boolean) {
    this.roomService.updateModoAppHabitacion({cambio: active ?? !this.isModoCambioHabitacion});
  }

  openModal(rute: string){
    this.router.navigate([`hotel/${rute}/${this.selectedRoom.roomNumber}`])
  }



  cancelarBloqueo() {
    const ref = this.dialogService.open(ConfimModalMessageComponent, {
      data: {
        message: '??EST??S SEGURO DE QUERER CANCELAR EL DESHABILITADO?',
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
    this.dialogService.open(MessageModalAutoclosableComponent, {
      data: {
        message: 'SE HA CANCELADO EL DESHABILITADO',
      },
    });
    this.authMode.cancelarBloqueo = false;
    this.roomService.updateSelectedRoom({
      ...this.selectedRoom,
      status: RoomStatusEnum.LIBRE
    })
  }



  abrirCamaristasEnTurno() {
    this.router.navigate(['hotel', 'camaristasEnTurno']);
  }

  cancelarEntrada() {

  }
}
