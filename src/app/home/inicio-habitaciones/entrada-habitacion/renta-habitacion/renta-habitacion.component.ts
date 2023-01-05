import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/room-types/services/room/room.service';
import { DialogService } from 'primeng/dynamicdialog';
import { Room } from '../../../../home/interfaces/room.interface';
import { take } from 'rxjs/operators';
import { controlHabitacion } from 'src/app/core/formsControl/controlHabitacion';
@Component({
  selector: 'app-renta-habitacion',
  templateUrl: './renta-habitacion.component.html',
  styleUrls: ['./renta-habitacion.component.scss']
})
export class RentaHabitacionComponent implements OnInit {

  form!: any;
  display = true
  // Variables provisionales la habitacion seleccionada se va a obtener por medio de los params en la ruta
  selectedRoom!: Room;

  maxPersonas:number = 3;
  maxHospedaje:number = 2;
  maxHoras:number = 4;

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
    });
  }

  //* Inicia el Pago de extras
  initPayExtra(){
    this.form.get('tarifa')?.disable();
    this.form.get('tarjetaLealtad')?.disable();
    this.form.get('aPie')?.disable();
    this.form.get('matricula')?.disable();
    this.form.get('marca')?.disable();
    this.form.get('modelo')?.disable();
    this.form.get('color')?.disable();
    this.form.get('comentario')?.disable();

    this.form.addValidators(controlHabitacion.extrasControl)
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


    this.form.get('aPie')?.valueChanges.subscribe((d: any)=>{

      if(d){
        this.form.get('matricula')?.disable()
        this.form.get('marca')?.disable()
        this.form.get('modelo')?.disable()
        this.form.get('color')?.disable()
        this.form.get('comentario')?.disable()
        this.form.get('matricula')?.setValue('')
        this.form.get('marca')?.setValue('')
        this.form.get('modelo')?.setValue('')
        this.form.get('color')?.setValue('')
        this.form.get('comentario')?.setValue('')
      }
      if(!d){
        this.form.get('matricula')?.enable()
        this.form.get('marca')?.enable()
        this.form.get('modelo')?.enable()
        this.form.get('color')?.enable()
        this.form.get('comentario')?.enable()
      }
    })
  }
//* --------------------------------


//* Botones de modal
  salir(){
    this.location.back()
  }

  aceptar(){
    this.router.navigate([`/hotel/rentaHabitacion/pagoRenta`]);
  }

//* --------------------------------
}
