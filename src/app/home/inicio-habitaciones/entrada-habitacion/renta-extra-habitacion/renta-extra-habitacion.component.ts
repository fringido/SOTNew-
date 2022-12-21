import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { take } from 'rxjs/operators';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { Room } from '../../../interfaces/room.interface';
import { RoomService } from 'src/app/room-types/services/room/room.service';

@Component({
  selector: 'app-renta-extra-habitacion',
  templateUrl: './renta-extra-habitacion.component.html',
  styleUrls: ['./renta-extra-habitacion.component.scss']
})
export class RentaExtraHabitacionComponent implements OnInit {

  form: any;
  display = true
  selectedRoom!: Room;


  constructor(
    private location:Location,
    private readonly router: Router,
    private readonly roomService: RoomService,
    public dialogService: DialogService,
    private fb: FormBuilder
  ) {
    this.formCreate();
  }
// *Crea las opciones de tarifa
  tarifas= [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
//* --------------------------------

  ngOnInit(): void {
    // TODO: se llamara al endpoint para asignar el valor a la habitacion seleccionada
    this.roomService.selectedRoom$.pipe(take(1)).subscribe((room) => {
      this.selectedRoom = room!;
        this.form.get('tarifa').disable();
        this.form.get('tarjetaLealtad').disable();
        this.form.get('aPie').disable();
        this.form.get('matricula').disable();
        this.form.get('marca').disable();
        this.form.get('modelo').disable();
        this.form.get('color').disable();
    });
  }
//* Inicia el formulario
  formCreate(){
    this.form = this.fb.group({
      tarifa: ['', [Validators.required]],
      tarjetaLealtad: [''],
      aPie: [false],
      matricula: ['',[Validators.required]],
      marca:['',[Validators.required]],
      modelo:['',[Validators.required]],
      color: ['',[Validators.required]],
      comentario:[''],
      personaExtra:[0],
      hospedaje:[0],
      horasExtra:[0],
      paquetes:[0],
      descuento:[0],
    })
  }
//* --------------------------------


//* Botones de modal
  salir(){
    this.location.back()
  }

  aceptar(){
    this.dialogService.open(MessageModalAutoclosableComponent, {
      data: { message: 'EXTRAS AGREGADOS CON ÉXITO' }
    });
    this.salir();
  }

//* --------------------------------
}
