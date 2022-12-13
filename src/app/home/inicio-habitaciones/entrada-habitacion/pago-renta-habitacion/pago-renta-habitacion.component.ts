import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { RoomService } from 'src/app/room-types/services/room/room.service';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { Room } from '../../../../home/interfaces/room.interface';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-pago-renta-habitacion',
  templateUrl: './pago-renta-habitacion.component.html',
  styleUrls: ['./pago-renta-habitacion.component.scss']
})
export class PagoRentaHabitacionComponent implements OnInit {

//* Inicio de variables
  display = true
  total: number = 1000;
  form!: FormGroup
  tipoDePago = new FormControl(null);
  tiposDePago = [
    { name: 'Efectivo', value: 1 },
    { name: 'Tarjeta', value: 2 },
    { name: 'Mixto', value: 3 },
    { name: 'Cortesía', value: 4 },
    { name: 'Consumo Inteerno', value: 5 }
  ];
  selectedRoom!: Room;
//* -------------------------------

  constructor(
    private fb: FormBuilder,
    private location: Location,
    public dialogService: DialogService,
    private router: Router,
    private readonly roomService: RoomService,
  ) {

    this.formoCreate();
  }


  ngOnInit(): void {
    this.menu();
    this.roomService.selectedRoom$.pipe(take(1)).subscribe((room) => {
      this.selectedRoom = room!;
    });
  }

  //* Observa los cambios del menu para mostrar el formulario y crear el FormGroup
  menu() {
    this.tipoDePago.valueChanges.subscribe((d) => {
      if (d == 1) {
        this.form = this.fb.group({
          tipoDePago: [this.tipoDePago.value],
          total: [this.total]
        })
      }
      if (d == 4) {
        this.form = this.fb.group({
          tipoDePago: [this.tipoDePago.value],
          total: [this.total],
          observacion: ['', Validators.required]
        })
      }
      if (d == 5) {
        this.form = this.fb.group({
          tipoDePago: [this.tipoDePago.value],
          total: [this.total],
          empleado: ['', Validators.required],
          observacion: ['', Validators.required],
        })
      }

    })
  }
//* ------------------------------------------------------

//* Trae el de pago mixto y de tarjeta
  addForm(form: FormGroup) {
    this.form = form
  }
//* ------------------------------------------------------

//* Inicia el formulario en nada
  formoCreate() {
    this.form = this.fb.group({
    })
  }
//* ------------------------------------------------------


//* BOtones de modal
  aceptar() {
    const genDialogMessage = (message: string) => {
      return this.dialogService.open(MessageModalAutoclosableComponent, {data: { message }});
    };
    // TODO: mensaje para el resto de estados que activan este componente
    if(this.selectedRoom.status === RoomStatusEnum.OCUPADA ) {
      const ref = genDialogMessage('EXTRAS AGREGADOS CON ÉXITO')
    }
    if(this.selectedRoom.status === RoomStatusEnum.PREPARADA ) {
      const ref = genDialogMessage('ENTRADA GENERADA CON ÉXITO')
    }
    if(this.selectedRoom.status === RoomStatusEnum.OCUPADA_POR_COBRAR ) {
      const ref = genDialogMessage('PAGO REALIZADO CON ÉXITO')
    }


    setTimeout(() => {
      this.router.navigate([`/hotel`]);
    }, 2000);
  }

  salir() {
    this.location.back()
  }
//* ------------------------------------------------------



}
