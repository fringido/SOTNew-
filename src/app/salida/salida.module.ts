import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalidaRoutingModule } from './salida-routing.module';
import { MandarLimpiezaHabitacionComponent } from './mandar-limpieza-habitacion/mandar-limpieza-habitacion.component';
import { PrimengModule } from '../core/modules/primeng/primeng.module';
import { LimpiezaHabitacionComponent } from './limpieza-habitacion/limpieza-habitacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MandarSupervisarHabitacionComponent } from './mandar-supervisar-habitacion/mandar-supervisar-habitacion.component';
import { LiberarHabitacionComponent } from './liberar-habitacion/liberar-habitacion.component';


@NgModule({
  declarations: [
    MandarLimpiezaHabitacionComponent,
    LimpiezaHabitacionComponent,
    MandarSupervisarHabitacionComponent,
    LiberarHabitacionComponent
  ],
  imports: [
    CommonModule,
    SalidaRoutingModule,
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class SalidaModule { }
