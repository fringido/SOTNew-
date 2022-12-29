import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalidaRoutingModule } from './salida-routing.module';
import { MandarLimpiezaHabitacionComponent } from './mandar-limpieza-habitacion/mandar-limpieza-habitacion.component';
import { PrimengModule } from '../core/modules/primeng/primeng.module';
import { LimpiezaHabitacionComponent } from './limpieza-habitacion/limpieza-habitacion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MandarLimpiezaHabitacionComponent,
    LimpiezaHabitacionComponent
  ],
  imports: [
    CommonModule,
    SalidaRoutingModule,
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class SalidaModule { }
