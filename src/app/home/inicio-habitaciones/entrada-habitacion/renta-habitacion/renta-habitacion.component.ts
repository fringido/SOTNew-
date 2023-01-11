import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/room-types/services/room/room.service';
import { DialogService } from 'primeng/dynamicdialog';
import { Room } from '../../../../home/interfaces/room.interface';
import { take } from 'rxjs/operators';
import { controlHabitacion } from 'src/app/core/formsControl/controlHabitacion';
import { TarifasService } from 'src/app/core/services/rentaHabitaicones/tarifas.service';
import { ComunicacionPagoService } from '../services/comunicacionPago.service';

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

  maxPersonas:number = 0;
  maxHospedaje:number = 0;
  maxHoras:number = 0;

  maxPersonasPrecio: number = 0;
  maxHospedajePrecio: number = 0;
  maxHorasPrecio: number = 0;

  costoHabitacion:number= 0

  total:number = 0


  constructor(
    private location:Location,
    private readonly router: Router,
    private readonly roomService: RoomService,
    public dialogService: DialogService,
    private fb: FormBuilder,
    private getTarifasQL: TarifasService,
    private pagoService: ComunicacionPagoService
  ) {
    this.formCreate();
  }
// *Crea las opciones de tarifa
  tarifas: any
//* --------------------------------
  tarifaSelect:any
  tarifa$ = this.getTarifasQL.tarifa$

  ngOnInit(): void {
    // TODO: se llamara al endpoint para asignar el valor a la habitacion seleccionada
    this.roomService.selectedRoom$.pipe(take(1)).subscribe((room) => {
      this.selectedRoom = room!;
    });
    this.getTarifas()

  }

  getTarifas(){
    this.getTarifasQL.getTarifas()
    this.tarifa$.subscribe(data => {
      this.tarifas = data
    })
    this.form.get('personaExtra')?.disable()
    this.form.get('hospedaje')?.disable()
    this.form.get('horasExtra')?.disable()
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

    this.form.get('tarifa')?.valueChanges.subscribe((d: any) => {

      if (this.form.get('tarifa')?.invalid) {
        this.form.get('personaExtra')?.disable()
        this.form.get('hospedaje')?.disable()
        this.form.get('horasExtra')?.disable()
      }
      if (this.form.get('tarifa')?.valid) {
        this.tarifaSelect = this.tarifas.filter((d: any) => d.id == this.form.get('tarifa')?.value)
        console.log(this.tarifaSelect)
        this.maxPersonas = this.tarifaSelect[0].personasExtraMax;
        this.maxHospedaje = this.tarifaSelect[0].hospedajesExtraMax;
        this.maxHoras = this.tarifaSelect[0].horasExtraMax;

        this.maxPersonasPrecio = this.tarifaSelect[0].costoPersonaExtra;
        this.maxHospedajePrecio = this.tarifaSelect[0].costoHospedajeExtra;
        this.maxHorasPrecio = this.tarifaSelect[0].costoHoraExtra;

        this.costoHabitacion = this.tarifaSelect[0].costoHabitacion

        this.form.get('personaExtra')?.enable()
        this.form.get('hospedaje')?.enable()
        this.form.get('horasExtra')?.enable()
      }
    })

    this.form.get('personaExtra')?.valueChanges.subscribe((d: any) => {
      this.total = (this.maxHorasPrecio * this.form.controls.horasExtra.value) +
        (this.maxHospedajePrecio * this.form.controls.hospedaje.value) +
        (this.maxPersonasPrecio * this.form.controls.personaExtra.value) +
        this.costoHabitacion
    })
    this.form.get('hospedaje')?.valueChanges.subscribe((d: any) => {
      this.total = (this.maxHorasPrecio * this.form.controls.horasExtra.value) +
        (this.maxHospedajePrecio * this.form.controls.hospedaje.value) +
        (this.maxPersonasPrecio * this.form.controls.personaExtra.value) +
        this.costoHabitacion
    })
    this.form.get('horasExtra')?.valueChanges.subscribe((d: any) => {
      this.total = (this.maxHorasPrecio * this.form.controls.horasExtra.value) +
        (this.maxHospedajePrecio * this.form.controls.hospedaje.value) +
        (this.maxPersonasPrecio * this.form.controls.personaExtra.value) +
        this.costoHabitacion
    })
  }
//* --------------------------------


//* Botones de modal
  salir(){
    this.location.back()
  }

  aceptar(){
    this.pagoService.infoPago$ = this.form
    this.pagoService.pago$ = this.total
    this.router.navigate([`/hotel/rentaHabitacion/pagoRenta`]);

  }

//* --------------------------------
}
