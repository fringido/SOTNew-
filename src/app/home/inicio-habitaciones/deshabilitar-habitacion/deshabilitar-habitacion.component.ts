import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { RoomService } from 'src/app/room-types/services/room/room.service';



@Component({
  selector: 'app-deshabilitar-habitacion',
  templateUrl: './deshabilitar-habitacion.component.html',
  styleUrls: ['./deshabilitar-habitacion.component.scss']
})
export class DeshabilitarHabitacionComponent implements OnInit {

  autorisacion = false
  form!:FormGroup;

  constructor(
    private location: Location,
    private readonly router: Router,
    public dialogService: DialogService,
    private readonly roomService: RoomService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      motivo:['',[Validators.required]]
    });
  }

  aceptar(){
    this.autorisacion=true
  }

  salir(){
    this.location.back()
  }

  modalCng(modal:boolean){
    this.autorisacion=modal;
  }

}
