import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-pago-renta-habitacion',
  templateUrl: './pago-renta-habitacion.component.html',
  styleUrls: ['./pago-renta-habitacion.component.scss']
})
export class PagoRentaHabitacionComponent implements OnInit {

  display = true

  total: number= 1000;
  form!:FormGroup
  tipoDePago = new FormControl(null);

  tiposDePago= [
    {name: 'Efectivo', value: 1},
    {name: 'Tarjeta', value: 2},
    {name: 'Mixto', value: 3},
    {name: 'Cortesía', value: 4},
    {name: 'Consumo Inteerno', value: 5}
];

  constructor(
    private fb:FormBuilder,
    private location:Location,
  ) {

    this.formoCreate();
  }


  ngOnInit(): void {
    this.menu();
  }

  menu(){
    this.tipoDePago.valueChanges.subscribe( (d) =>{
      if(d == 1){
        this.form = this.fb.group({
          tipoDePago: [this.tipoDePago.value],
          total: [this.total]
        })
      }
      if(d == 4){
        this.form = this.fb.group({
          tipoDePago: [this.tipoDePago.value],
          total: [this.total],
          observacion:['', Validators.required]
        })
      }
      if(d == 5){
        this.form = this.fb.group({
          tipoDePago: [this.tipoDePago.value],
          total: [this.total],
          empleado:['', Validators.required],
          observacion:['', Validators.required],
        })
      }
      console.log(this.form)
      console.log('Tipo',this.tipoDePago.value)

    })
  }

  addForm(form:FormGroup){
    this.form = form
    console.log(this.form)
  }

  formoCreate(){
    this.form = this.fb.group({
    })
  }

  aceptar(){

  }

  salir(){
    this.location.back()
  }

}
