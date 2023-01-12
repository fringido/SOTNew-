import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { take } from 'rxjs/operators';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { Room } from '../../../interfaces/room.interface';
import { RoomService } from 'src/app/room-types/services/room/room.service';
import { controlHabitacion } from 'src/app/core/formsControl/controlHabitacion';
import { TarifasService } from 'src/app/core/services/rentaHabitaicones/tarifas.service';
import { ComunicacionPagoService } from '../services/comunicacionPago.service';
import { ObtenerHabitacionesService } from 'src/app/core/services/habitaciones/obtener-habitaciones.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-renta-extra-habitacion',
  templateUrl: './renta-extra-habitacion.component.html',
  styleUrls: ['./renta-extra-habitacion.component.scss']
})
export class RentaExtraHabitacionComponent implements OnInit {

  form: any;
  display = true
    // Variables provisionales la habitacion seleccionada se va a obtener por medio de los params en la ruta
  selectedRoom!: Room;

  tarifas: any
  habitacion: any

  tarifas$ = this.getTarifasQL.tarifa$
  habitacion$ = this.habitacionService.habitacion$

  maxPersonas:number = 3;
  maxHospedaje:number = 2;
  maxHoras:number = 4;

  maxPersonasPrecio: number = 0;
  maxHospedajePrecio: number = 0;
  maxHorasPrecio: number = 0;
  tarifaSelect: any

  costoHabitacion: number = 0

  total: number = 0


  constructor(
    private location:Location,
    private readonly router: Router,
    private readonly roomService: RoomService,
    public dialogService: DialogService,
    private fb: FormBuilder,
    private getTarifasQL: TarifasService,
    private pagoService: ComunicacionPagoService,
    private habitacionService: ObtenerHabitacionesService,
    private route: ActivatedRoute
  ) {
    this.formCreate();
  }

  ngOnInit(): void {
    // TODO: se llamara al endpoint para asignar el valor a la habitacion seleccionada
    // this.roomService.selectedRoom$.pipe(take(1)).subscribe((room) => {
    //   this.selectedRoom = room!;
    let num = String(this.route.snapshot.paramMap.get("roomNumber"));
    this.getInfo(num)
    // });
    this.tarifaSeleccion()
  }

  getInfo(numHabitacion: string) {
    this.habitacionService.getHabitacio(numHabitacion)
    this.habitacion$.subscribe(data => {
      this.habitacion = data
    })
    this.getTarifasQL.getTarifas()
    this.tarifas$.subscribe(data => {
      this.tarifas = data
    }
    )

  }

  tarifaSeleccion(){
    const id = "9014D4C3-C68A-ED11-A975-005056AFA94B"
    this.tarifaSelect = this.tarifas.filter((d:any) => d.id == id)
    this.form.patchValue({
      tarifa: this.tarifaSelect.id
    })
    this.maxPersonas = this.tarifaSelect[0].personasExtraMax;
    this.maxHospedaje = this.tarifaSelect[0].hospedajesExtraMax;
    this.maxHoras = this.tarifaSelect[0].horasExtraMax;

    this.maxPersonasPrecio = this.tarifaSelect[0].costoPersonaExtra;
    this.maxHospedajePrecio = this.tarifaSelect[0].costoHospedajeExtra;
    this.maxHorasPrecio = this.tarifaSelect[0].costoHoraExtra;

    this.costoHabitacion = this.tarifaSelect[0].costoHabitacion
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

    this.form.get('tarifa').disable();
    this.form.get('tarjetaLealtad').disable();
    this.form.get('aPie').disable();
    this.form.get('matricula').disable();
    this.form.get('marca').disable();
    this.form.get('modelo').disable();
    this.form.get('color').disable();
    this.form.get('color').disable();
    this.form.get('comentario').disable();
    this.form.addValidators(controlHabitacion.extrasControl)

    this.form.get('personaExtra')?.valueChanges.subscribe((d: any) => {
      this.sumTotal()
    })
    this.form.get('hospedaje')?.valueChanges.subscribe((d: any) => {
      this.sumTotal()
    })
    this.form.get('horasExtra')?.valueChanges.subscribe((d: any) => {
      this.sumTotal()
    })
  }

//* --------------------------------

sumTotal(){
  this.total = (this.maxHorasPrecio * this.form.controls.horasExtra.value) +
    (this.maxHospedajePrecio * this.form.controls.hospedaje.value) +
    (this.maxPersonasPrecio * this.form.controls.personaExtra.value) +
    this.costoHabitacion
}
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
