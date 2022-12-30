import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeshabilitarHabitacionRoutingModule } from './deshabilitar-habitacion-routing.module';
import { DeshabilitarHabitacionComponent } from './deshabilitar-habitacion.component';
import {DialogModule} from 'primeng/dialog';

import { ReactiveFormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { AutorizacionComponent } from './coomponentes/autorizacion/autorizacion.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';


@NgModule({
  declarations: [
    DeshabilitarHabitacionComponent,
    AutorizacionComponent
  ],
  imports: [
    CommonModule,
    DeshabilitarHabitacionRoutingModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    InputTextModule,
    PasswordModule
  ]
})
export class DeshabilitarHabitacionModule { }
