import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservacionRoutingModule } from './reservacion-routing.module';
import { ReservacionComponent } from './reservacion.component';
import { AsignarReservacionComponent } from './vistas/asignar-reservacion/asignar-reservacion.component';
import {DialogModule} from 'primeng/dialog';
import { ComponentReservacionComponent } from './vistas/asignar-reservacion/component-reservacion/component-reservacion.component';

@NgModule({
  declarations: [
    ReservacionComponent,
    AsignarReservacionComponent,
    ComponentReservacionComponent
  ],
  imports: [
    CommonModule,
    ReservacionRoutingModule,
    DialogModule
  ]
})
export class ReservacionModule { }
