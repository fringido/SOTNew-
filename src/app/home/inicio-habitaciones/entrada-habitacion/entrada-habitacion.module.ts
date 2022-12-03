import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { EntradaHabitacionRoutingModule } from './entrada-habitacion-routing.module';
import { EntradaHabitacionComponent } from './entrada-habitacion.component';
import { RentaHabitacionComponent } from './renta-habitacion/renta-habitacion.component';
import { PagoRentaHabitacionComponent } from './pago-renta-habitacion/pago-renta-habitacion.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [
    EntradaHabitacionComponent,
    RentaHabitacionComponent,
    PagoRentaHabitacionComponent
  ],
  imports: [
    CommonModule,
    EntradaHabitacionRoutingModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    InputNumberModule
  ],
  exports:[RentaHabitacionComponent]
})
export class EntradaHabitacionModule { }
