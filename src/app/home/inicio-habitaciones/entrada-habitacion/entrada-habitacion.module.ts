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
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';


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
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputTextareaModule
  ],
  exports:[RentaHabitacionComponent]
})
export class EntradaHabitacionModule { }
