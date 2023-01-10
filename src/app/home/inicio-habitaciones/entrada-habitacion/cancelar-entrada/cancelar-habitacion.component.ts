import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { SessionStorageService } from 'src/app/core/services/sessionStorage/session-storage.service';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { RoomService } from 'src/app/room-types/services/room/room.service';

@Component({
  selector: 'app-cancelar-habitacion',
  templateUrl: './cancelar-habitacion.component.html',
  styleUrls: ['./cancelar-habitacion.component.scss']
})
export class CancelarHabitacionComponent implements OnInit {

  authMode = false
  form!:FormGroup;


  // Variables provisionales la habitacion seleccionada se va a obtener por medio de los params en la ruta
  selectedRoom!: any;
  selectedRoomSubs!: Subscription;

  constructor(
    private readonly router: Router,
    public dialogService: DialogService,
    private readonly roomService: RoomService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.selectedRoomSubs = this.roomService.selectedRoom$.subscribe((room) => {
      this.selectedRoom = room
    });

    this.form = this.fb.group({
      motivo:['',[Validators.required]]
    });
  }

  aceptar(){
    if(this.form.invalid) {
      return;
    }
    this.authMode = true;
  }

  confirmarCancelarHabitacion(event: boolean) {
    if(!event) {
      this.authMode = false;
      return; 
    }
    this.roomService.updateSelectedRoom({
      ...this.selectedRoom,
      status: RoomStatusEnum.LIBRE
    });
    this.dialogService.open(MessageModalAutoclosableComponent, {
      data: {
        message: 'CANCELACIÓN EXITOSA'
      }
    })
    this.salir();

  }

  salir(){
    this.router.navigate(['hotel']);
  }

}
