import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { take } from 'rxjs/operators';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { RoomStatusEnum } from 'src/app/room-types/enums/room-status.enum';
import { Room } from 'src/app/room-types/interfaces/room.interface';
import { RoomService } from '../../../../room-types/services/room/room.service';

@Component({
  selector: 'app-cobrar-pendiente-habitacion',
  templateUrl: './cobrar-pendiente-habitacion.component.html',
  styleUrls: ['./cobrar-pendiente-habitacion.component.scss']
})
export class CobrarPendienteHabitacionComponent implements OnInit {
  form: any;
  display = true

  // Variables provisionales la habitacion seleccionada se va a obtener por medio de los params en la ruta
  selectedRoom!: Room;


  constructor(
    private location: Location,
    private readonly router: Router,
    private readonly roomService: RoomService,
    public dialogService: DialogService,
    private fb: FormBuilder
  ) {
    this.formCreate();
  }
  // *Crea las opciones de tarifa
  tarifas = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  //* --------------------------------

  ngOnInit(): void {
    // TODO: se llamara al endpoint para asignar el valor a la habitacion seleccionada
    this.roomService.selectedRoom$.pipe(take(1)).subscribe((room) => {
      this.selectedRoom = room!;
    });
  }
  //* Inicia el formulario
  formCreate() {
    this.form = this.fb.group({
      tarifa: ['', [Validators.required]],
      tarjetaLealtad: [''],
      aPie: [false],
      matricula: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      color: ['', [Validators.required]],
      comentario: [''],
      personaExtra: [0],
      hospedaje: [0],
      horasExtra: [0],
      paquetes: [0],
      descuento: [0],
    });
    // se deshabilitan todos los controls porque no cambiarán
    this.form.disable();
  }
  //* --------------------------------


  //* Botones de modal
  salir() {
    this.location.back()
  }

  aceptar() {
    this.router.navigate([`/hotel/rentaHabitacion/pagoRenta`]);
  }

  //* --------------------------------
}
