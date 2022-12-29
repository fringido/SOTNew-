import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { MantenimientoComponent } from './mantenimiento.component';

import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    MantenimientoComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule
  ]
})
export class MantenimientoModule { }
