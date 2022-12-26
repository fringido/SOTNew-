import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageModalAutoclosableComponent } from 'src/app/core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { ModalService } from 'src/app/core/services/modal.service';
import { CambioHabitacionService } from '../services/cambio-habitacion/cambio-habitacion.service';

@Component({
  selector: 'app-cambio-habitacion',
  templateUrl: './cambio-habitacion.component.html',
  styleUrls: ['./cambio-habitacion.component.scss']
})
export class CambioHabitacionComponent implements OnInit, OnDestroy {
  display = true
  constructor(
    public dialogService: DialogService,
    private modalService: ModalService,
    private fb: FormBuilder,
    private location: Location,
    private readonly cambioHabitacionService: CambioHabitacionService
    ) { }

  motivoForm =this.fb.group({
    motivo: ['', Validators.required],
    comentarios: ['', Validators.required]
  })

  ngOnInit(): void {

    this.modalService.open();
  }

  ngOnDestroy(): void {
    this.modalService.close();
  }

  setMotivo(motivo: string) {
    this.motivoForm.get('motivo')?.setValue(motivo);
  }

  get motivoValue() {
    return this.motivoForm.get('motivo')?.value;
  }

  back() {
    this.location.back();
  }

  confirm() {
    if(this.motivoForm.invalid) {
      return;
    }
    this.location.back();
    this.dialogService.open(MessageModalAutoclosableComponent, {
      data: {
        message: 'CAMBIO REALIZADO CON ÉXITO'
      }
    });
    // TODO: conectar a backend para guardar el cambio de hab en db
    console.log(this.motivoForm.value);
    this.cambioHabitacionService.confirmCambioHab();
    
  }
}
