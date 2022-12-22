import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { controlFormMixto } from 'src/app/core/formsControl/controlFormMixto';

@Component({
  selector: 'app-pago-mixto',
  templateUrl: './pago-mixto.component.html',
  styleUrls: ['./pago-mixto.component.scss']
})
export class PagoMixtoComponent implements OnInit {

  @Input() totalPagar: number = 0;

  @Output() newItemEvent = new EventEmitter<FormGroup>();

  //* Inicia las variables
  form!: FormGroup
  contador: number = 2;
  //* ------------------------------------------
  constructor(
    private fb: FormBuilder

  ) { }

  //* trae los datos de el FormArray
  get mixtoField() {
    return this.form.get('mixto') as FormArray
  }
  //* ------------------------------------------

  ngOnInit(): void {
    this.createForm()
    this.iniciarArrayForm()

    setTimeout(() => {
      this.newItemEvent.emit(this.form)
    }, 1);
  }

   //*Inicio del componente

   iniciarArrayForm() {
    //? Al iniciarse el componente divide el total entre 2 y los inserta en el importe
    let total = this.totalPagar / 2
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
  //* ------------------------------------------

  //*Creación del formulario
  private createForm() {
    this.form = this.fb.group({
      tipoDePago: [3],
      totalPagar: [this.totalPagar],
      mixto: this.fb.array([])
    }, {
      validators: controlFormMixto.totalValidator
    })
    //? Si la suma de importe es mayor a el total el componente cambia a  0
    this.form.valueChanges.subscribe(d => {

      let suma = 0
      let indice = null
      let contador = this.mixtoField.value.length

      for (let i = 0; i < contador; i++) {

        if (!this.mixtoField.at(i).get('importe')?.pristine) {
          indice = i
        }
        this.mixtoField.at(i).get('importe')?.markAsPristine();

        suma = suma + this.mixtoField.at(i).get('importe')?.value
      }

      if (suma > this.totalPagar) {
        if (indice != null) {
          this.mixtoField.at(indice).patchValue({
            importe: 0
          })
          indice = null
        }
      }
      this.newItemEvent.emit(this.form)
    })
  }
  //* ------------------------------------------

  //* Botones de agregar o quitar formulario

  aumentarPago() {
    if (this.contador < 4) {
      this.contador++
      this.mixtoField.push(this.crearMixto())
    }
  }

  quitarPago() {
    if (this.contador > 2) {
      this.contador--;
      this.mixtoField.removeAt(this.contador)
    }
  }

  //* ------------------------------------------

  //* Creacion del formulario Array
  crearMixto() {
    return this.fb.group({
      importe: [0, [Validators.required, controlFormMixto.isNotCero]],
      tipoTarjeta: [1, [Validators.required]],
      numeroTarjeta: ['', [Validators.required]],
      numeroAprobacion: ['', [Validators.required]],
      propina: [0]
    })
  }
  //* ------------------------------------------

  //* Seleccion del tipo de pago
  selectCard(i: number, tipo: number) {
    this.mixtoField.at(i).patchValue({
      total: this.totalPagar,
      tipoTarjeta: tipo
    })

    if (tipo == 4) {
      //? De habilita los botones
      this.mixtoField.at(i).get('numeroTarjeta')?.disable();
      this.mixtoField.at(i).get('numeroAprobacion')?.disable()
      this.mixtoField.at(i).get('propina')?.disable()
      this.mixtoField.at(i).get('propina')?.setValue('');
      this.mixtoField.at(i).get('numeroTarjeta')?.setValue('');
      this.mixtoField.at(i).get('numeroAprobacion')?.setValue('');
      this.mixtoField.at(i).get('propina')?.setValue('');
    }
    if (tipo != 4) {
      //? Habilita los Botones
      this.mixtoField.at(i).get('numeroTarjeta')?.enable();
      this.mixtoField.at(i).get('numeroAprobacion')?.enable()
      this.mixtoField.at(i).get('propina')?.enable()
    }
  }
  //* ------------------------------------------

}
