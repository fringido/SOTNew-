import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagoRentaHabitacionComponent } from './pago-renta-habitacion/pago-renta-habitacion.component';
import { RentaHabitacionComponent } from './renta-habitacion/renta-habitacion.component';


const routes: Routes = [
  {path: '', component:RentaHabitacionComponent},
  {path: 'pagoRenta', component: PagoRentaHabitacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradaHabitacionRoutingModule { }
