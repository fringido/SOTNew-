import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { controlFormMixto } from 'src/app/core/formsControl/controlFormMixto';


@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {

  display = true;

  form!:FormGroup;

  constructor(
    private location: Location,
    private readonly router: Router,
    public dialogService: DialogService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      tipoMantenimiento:[0,[controlFormMixto.isNotCero]],
      motivo:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  selectTipo(tipo: number){
    this.form.patchValue({
      tipoMantenimiento: tipo
    })
  }

  aceptar(){
    const genDialogMessage = (message: string) => {
      return this.dialogService.open(MessageModalAutoclosableComponent, {data: { message }});
    };
    genDialogMessage(`MANTENIMIENTO GENERADO CON ÉXITO`)
    this.router.navigate([`/hotel`]);
  }

  salir(){
    this.location.back()
  }


}
