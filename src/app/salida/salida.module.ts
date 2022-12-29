import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalidaRoutingModule } from './salida-routing.module';
import { MandarLimpiezaHabitacionComponent } from './mandar-limpieza-habitacion/mandar-limpieza-habitacion.component';
import { PrimengModule } from '../core/modules/primeng/primeng.module';


@NgModule({
  declarations: [
    MandarLimpiezaHabitacionComponent
  ],
  imports: [
    CommonModule,
    SalidaRoutingModule,
    PrimengModule
  ]
})
export class SalidaModule { }
