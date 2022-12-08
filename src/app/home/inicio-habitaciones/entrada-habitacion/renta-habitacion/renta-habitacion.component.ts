import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renta-habitacion',
  templateUrl: './renta-habitacion.component.html',
  styleUrls: ['./renta-habitacion.component.scss']
})
export class RentaHabitacionComponent implements OnInit {

  form: any;
  display = true

  constructor(
    private location:Location,
    private readonly router: Router,
    private fb: FormBuilder
  ) {
    this.formCreate();
  }

  tarifas= [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];


  ngOnInit(): void {

  }

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

    this.form.get('aPie').valueChanges.subscribe((d: any)=>{

      if(d){
        this.form.get('matricula').disable()
        this.form.get('marca').disable()
        this.form.get('modelo').disable()
        this.form.get('color').disable()
        this.form.get('comentario').disable()
        this.form.get('matricula').setValue('')
        this.form.get('marca').setValue('')
        this.form.get('modelo').setValue('')
        this.form.get('color').setValue('')
        this.form.get('comentario').setValue('')
      }
      if(!d){
        this.form.get('matricula').enable()
        this.form.get('marca').enable()
        this.form.get('modelo').enable()
        this.form.get('color').enable()
        this.form.get('comentario').enable()
      }
    })
  }

  salir(){
    this.location.back()
  }

  aceptar(){
    this.router.navigate([`/hotel/rentaHabitacion/pagoRenta`]);
  }
}
