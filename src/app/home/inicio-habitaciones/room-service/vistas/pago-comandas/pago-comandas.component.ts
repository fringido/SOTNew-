import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';


@Component({
  selector: 'app-pago-comandas',
  templateUrl: './pago-comandas.component.html',
  styleUrls: ['./pago-comandas.component.scss']
})
export class PagoComandasComponent implements OnInit {

  //* Inicio de variables
  display = true
  total: number = 1000;
  form!: FormGroup
  tipoDePago = new FormControl(null);

  tiposDePago = [
    { name: 'Efectivo', value: 1 },
    { name: 'Tarjeta', value: 2 },
    { name: 'Mixto', value: 3 },
    { name: 'Cortesía', value: 4 },
    { name: 'Consumo Inteerno', value: 5 }
  ];
  //* -------------------------------


  constructor(
    private fb: FormBuilder,
    private location: Location,
    public dialogService: DialogService,
    private router: Router,
  ) {
    this.formoCreate();
  }

  ngOnInit(): void {
    this.menu();
  }

  //* Observa los cambios del menu para mostrar el formulario y crear el FormGroup
  menu() {
    this.tipoDePago.valueChanges.subscribe((d) => {
      if (d == 1) {
        this.form = this.fb.group({
          tipoDePago: [this.tipoDePago.value],
          total: [this.total]
        })
      }
      if (d == 4) {
        this.form = this.fb.group({
          tipoDePago: [this.tipoDePago.value],
          total: [this.total],
          observacion: ['', Validators.required]
        })
      }
      if (d == 5) {
        this.form = this.fb.group({
          tipoDePago: [this.tipoDePago.value],
          total: [this.total],
          empleado: ['', Validators.required],
          observacion: ['', Validators.required],
        })
      }

    })
  }
  //* ------------------------------------------------------

  //* Trae el de pago mixto y de tarjeta
  addForm(form: FormGroup) {
    this.form = form
  }
  //* ------------------------------------------------------

  //* Inicia el formulario en nada
  formoCreate() {
    this.form = this.fb.group({
    })
  }
  //* ------------------------------------------------------


  //* BOtones de modal
  aceptar() {
    const genDialogMessage = (message: string) => {
      return this.dialogService.open(MessageModalAutoclosableComponent, {data: { message }});
    };
    const ref = genDialogMessage('PAGO REALIZADO CON ÉXITO')

    this.router.navigate([`/hotel`]);
  }

  salir() {
    this.location.back()
  }
  //* ------------------------------------------------------


}
