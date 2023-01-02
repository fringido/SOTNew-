import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LimpiezaHabitacionComponent } from './limpieza-habitacion/limpieza-habitacion.component';
import { MandarLimpiezaHabitacionComponent } from './mandar-limpieza-habitacion/mandar-limpieza-habitacion.component';
import { MandarSupervisarHabitacionComponent } from './mandar-supervisar-habitacion/mandar-supervisar-habitacion.component';

const routes: Routes = [
  {path: 'enviar-limpieza', component: MandarLimpiezaHabitacionComponent},
  {path: 'limpieza', component: LimpiezaHabitacionComponent},
  {path: 'supervisar', component: MandarSupervisarHabitacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalidaRoutingModule { }
