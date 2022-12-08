import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pago-mixto',
  templateUrl: './pago-mixto.component.html',
  styleUrls: ['./pago-mixto.component.scss']
})
export class PagoMixtoComponent implements OnInit {

  @Input() totalPagar: number = 0;

  @Output() newItemEvent = new EventEmitter<FormGroup>();

  form!: FormGroup
  contador:number = 2;

  constructor(
    private fb: FormBuilder
  ) { }

  get mixtoField(){
    return this.form.get('mixto') as FormArray
  }

  ngOnInit(): void {
    this.createForm()
    this.iniciarArrayForm()
    setTimeout(() => {
      this.newItemEvent.emit(this.form)
    }, 0);
  }

  iniciarArrayForm(){
    let total = this.totalPagar /2
      this.mixtoField.push(this.crearMixto())
      this.mixtoField.push(this.crearMixto())

      this.mixtoField.at(0).patchValue({
        importe: total,
        TipoTarjeta: '1'
      })

      this.mixtoField.at(1).patchValue({
        importe: total,
        TipoTarjeta: '1'
      })


  }

  private createForm(){
    this.form = this.fb.group({
      tipoDePago:[3],
      totalPagar:[this.totalPagar],
      mixto: this.fb.array([])
    })

    this.form.valueChanges.subscribe(d =>{
      this.newItemEvent.emit(this.form)
    })
  }

    //* Botones de agregar o quitar formulario

    aumentarPago(){
      if(this.contador < 4){
        this.contador++
        this.mixtoField.push(this.crearMixto())
      }
    }

    quitarPago(){
      if(this.contador > 2){
        this.contador--;
        this.mixtoField.removeAt(this.contador)
      }
    }

    //* ------------------------------------------

  crearMixto(){

    return this.fb.group({
      importe:[0, Validators.required],
      tipoTarjeta: [1, Validators.required],
      numeroTarjeta:['', Validators.required],
      numeroAprobacion:['', Validators.required],
      propina:[0]
    })

  }

  selectCard(i:number,tipo:number){
    this.mixtoField.at(i).patchValue({
      tipoTarjeta: tipo
    })

    if(tipo == 4){
      this.mixtoField.at(i).get('numeroTarjeta')?.disable();
      this.mixtoField.at(i).get('numeroAprobacion')?.disable()
      this.mixtoField.at(i).get('propina')?.disable()
      this.mixtoField.at(i).get('propina')?.setValue('');
      this.mixtoField.at(i).get('numeroTarjeta')?.setValue('');
      this.mixtoField.at(i).get('numeroAprobacion')?.setValue('');
      this.mixtoField.at(i).get('propina')?.setValue('');
    }
    if(tipo != 4){
      this.mixtoField.at(i).get('numeroTarjeta')?.enable();
      this.mixtoField.at(i).get('numeroAprobacion')?.enable()
      this.mixtoField.at(i).get('propina')?.enable()
    }
  }


}
