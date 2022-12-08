import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pago-tarjeta',
  templateUrl: './pago-tarjeta.component.html',
  styleUrls: ['./pago-tarjeta.component.scss']
})
export class PagoTarjetaComponent implements OnInit {

  @Input() totalPagar: number = 0;

  @Output() newItemEvent = new EventEmitter<FormGroup>();

  form!: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.createForm()
    setTimeout(() => {
      this.newItemEvent.emit(this.form)
    }, 0);
  }

  createForm(){
    this.form = this.fb.group({
      totalPagar:[this.totalPagar],
      tipoTarjeta: [1, Validators.required],
      numeroTarjeta:['', Validators.required],
      numeroAprobacion:['', Validators.required],
      propina:[0]
    })
    this.form.valueChanges.subscribe(d =>{
      this.newItemEvent.emit(this.form)
    })
  }

  selectCard(tipo:number){
    this.form.controls['tipoTarjeta'].patchValue(tipo)
  }



}
