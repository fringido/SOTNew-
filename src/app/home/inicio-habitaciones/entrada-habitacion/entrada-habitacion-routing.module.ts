import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioHabitacionComponent } from './cambio-habitacion/cambio-habitacion.component';
import { CancelarHabitacionComponent } from './cancelar-entrada/cancelar-habitacion.component';
import { CobrarPendienteHabitacionComponent } from './cobrar-pendiente-habitacion/cobrar-pendiente-habitacion.component';
import { PagoRentaHabitacionComponent } from './pago-renta-habitacion/pago-renta-habitacion.component';
import { RentaExtraHabitacionComponent } from './renta-extra-habitacion/renta-extra-habitacion.component';
import { RentaHabitacionComponent } from './renta-habitacion/renta-habitacion.component';


const routes: Routes = [
  { path: ':roomNumber', component:RentaHabitacionComponent},
  { path: 'pagoRenta/:roomNumber', component: PagoRentaHabitacionComponent},
  { path: 'pagoExtraRenta/:roomNumber', component: RentaExtraHabitacionComponent},
  { path: 'cobroPendiente/:roomNumber', component: CobrarPendienteHabitacionComponent},
  { path: 'cambio/:roomNumber', component: CambioHabitacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradaHabitacionRoutingModule { }
