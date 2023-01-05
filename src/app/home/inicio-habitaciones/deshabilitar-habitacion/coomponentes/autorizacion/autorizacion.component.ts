import { Component, EventEmitter, OnInit, Output, Input ,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { RoomService } from 'src/app/room-types/services/room/room.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-autorizacion',
  templateUrl: './autorizacion.component.html',
  styleUrls: ['./autorizacion.component.scss']
})
export class AutorizacionComponent implements OnInit, OnDestroy {

  form!:FormGroup

  @Output() newItemEvent = new EventEmitter<boolean>();
  @Input() observaciones!: string;

  // Variables provisionales la habitacion seleccionada se va a obtener por medio de los params en la ruta
  selectedRoom!: any;
  selectedRoomSubs!: Subscription;

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly roomService: RoomService,
    private dialogService: DialogService,


    ) {
      this.form = this.fb.group({
        name: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
    }

  ngOnInit(): void {
    this.selectedRoomSubs = this.roomService.selectedRoom$.subscribe((room) => {
      this.selectedRoom = room;
    })
  }

  ngOnDestroy(): void {
    this.selectedRoomSubs.unsubscribe();
  }

  cancelar(){
    this.newItemEvent.emit(false)
  }
  aceptar(){
    const genDialogMessage = (message: string) => {
      return this.dialogService.open(MessageModalAutoclosableComponent, {data: { message }});
    };
    genDialogMessage(`DESHABILITARÍAN GENERADA CON ÉXITO`)
    this.router.navigate([`/hotel`]);
    this.roomService.updateSelectedRoom({
      ...this.selectedRoom,
      status: RoomStatusEnum.BLOQUEADA,
      observaciones: this.observaciones
    });
  }

}
