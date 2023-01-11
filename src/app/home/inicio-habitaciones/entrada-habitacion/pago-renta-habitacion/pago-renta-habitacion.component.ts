import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { RoomService } from 'src/app/room-types/services/room/room.service';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { Room } from '../../../../home/interfaces/room.interface';
import { take } from 'rxjs/operators';
import { ComunicacionPagoService } from '../services/comunicacionPago.service';

@Component({
  selector: 'app-pago-renta-habitacion',
  templateUrl: './pago-renta-habitacion.component.html',
  styleUrls: ['./pago-renta-habitacion.component.scss']
})
export class PagoRentaHabitacionComponent implements OnInit {

//* Inicio de variables
  display = true
  total = this.pagoService.pago$;
  form!: FormGroup
  tipoDePago = new FormControl(null);
  tiposDePago = [
    { name: 'Efectivo', value: 1 },
    { name: 'Tarjeta', value: 2 },
    { name: 'Mixto', value: 3 },
    { name: 'Cortesía', value: 4 },
    { name: 'Consumo Inteerno', value: 5 }
  ];
  // Variables provisionales la habitacion seleccionada se va a obtener por medio de los params en la ruta
  selectedRoom!: Room;
//* -------------------------------

  constructor(
    private fb: FormBuilder,
    private location: Location,
    public dialogService: DialogService,
    private router: Router,
    private readonly roomService: RoomService,
    private pagoService: ComunicacionPagoService

  ) {

    this.formoCreate();
  }


  ngOnInit(): void {
    this.menu();
    // TODO: se llamara al endpoint para asignar el valor a la habitacion seleccionada
    this.roomService.selectedRoom$.pipe(take(1)).subscribe((room) => {
      return this.selectedRoom = room!;
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
    this.router.navigate([`/hotel`]);
    // TODO: mensaje para el resto de estados que activan este componente
    if(this.selectedRoom.status === RoomStatusEnum.PREPARADA ) {
      const ref = genDialogMessage('ENTRADA GENERADA CON ÉXITO')
      return;
    }
    if(this.roomService.isroomPorCobrar(this.selectedRoom.status) ) {
      const ref = genDialogMessage('PAGO REALIZADO CON ÉXITO')
      return;
    }
  }

  salir() {
    this.location.back()
  }
//* ------------------------------------------------------



}
