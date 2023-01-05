import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { controlFormMixto } from 'src/app/core/formsControl/controlFormMixto';
import { RoomService } from 'src/app/room-types/services/room/room.service';
import { Subscription } from 'rxjs';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { TipoMantenimientoEnum } from '../../interfaces/tipo-mantenimiento.enum';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit, OnDestroy {

  readonly tipoMantenimiento = TipoMantenimientoEnum;

  display = true;

  form!:FormGroup;

  // Variables provisionales la habitacion seleccionada se va a obtener por medio de los params en la ruta
  selectedRoom: any;
  selectedRoomRubs!: Subscription;

  constructor(
    private location: Location,
    private readonly router: Router,
    public dialogService: DialogService,
    private roomService: RoomService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      tipoMantenimiento:['',[Validators.required]],
      motivo:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.selectedRoomRubs = this.roomService.selectedRoom$.subscribe((room) => {
      this.selectedRoom = room;
    });
  }

  ngOnDestroy(): void {
    this.selectedRoomRubs.unsubscribe();
  }

  selectTipo(tipo: TipoMantenimientoEnum){
    this.form.patchValue({
      tipoMantenimiento: tipo
    })
  }

  aceptar(){
    const genDialogMessage = (message: string) => {
      return this.dialogService.open(MessageModalAutoclosableComponent, {data: { message }});
    };
    this.roomService.updateSelectedRoom({
      ...this.selectedRoom,
      status: RoomStatusEnum.MANTENIMIENTO, 
      tipoMantenimiento: this.form.get('tipoMantenimiento')?.value
    });
    genDialogMessage(`MANTENIMIENTO GENERADO CON ÉXITO`)
    this.router.navigate([`/hotel`]);
  }

  salir(){
    this.location.back()
  }


}
