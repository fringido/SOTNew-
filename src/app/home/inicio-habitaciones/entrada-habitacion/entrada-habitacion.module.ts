import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { EntradaHabitacionRoutingModule } from './entrada-habitacion-routing.module';
import { EntradaHabitacionComponent } from './entrada-habitacion.component';
import { RentaHabitacionComponent } from './renta-habitacion/renta-habitacion.component';
import { PagoRentaHabitacionComponent } from './pago-renta-habitacion/pago-renta-habitacion.component';
import { RentaExtraHabitacionComponent } from './renta-extra-habitacion/renta-extra-habitacion.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DialogModule} from 'primeng/dialog';
import { PagoTarjetaComponent } from './pago-renta-habitacion/pago-tarjeta/pago-tarjeta.component';
import { PagoMixtoComponent } from './pago-renta-habitacion/pago-mixto/pago-mixto.component';
import {InputMaskModule} from 'primeng/inputmask';
import { CobrarPendienteHabitacionComponent } from './cobrar-pendiente-habitacion/cobrar-pendiente-habitacion.component';
import {KeyFilterModule} from 'primeng/keyfilter';
import { CambioHabitacionComponent } from './cambio-habitacion/cambio-habitacion.component';

@NgModule({
  declarations: [
    EntradaHabitacionComponent,
    RentaHabitacionComponent,
    PagoRentaHabitacionComponent,
    RentaExtraHabitacionComponent,
    CobrarPendienteHabitacionComponent,
    CambioHabitacionComponent,
    PagoTarjetaComponent,
    PagoMixtoComponent,
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
    KeyFilterModule,
    CheckboxModule,
    InputTextareaModule,
    DialogModule,
    InputMaskModule
  ],
  providers: [],
  exports:[]
})
export class EntradaHabitacionModule { }
