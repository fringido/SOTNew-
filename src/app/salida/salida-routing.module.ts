import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiberarHabitacionComponent } from './liberar-habitacion/liberar-habitacion.component';
import { LimpiezaHabitacionComponent } from './limpieza-habitacion/limpieza-habitacion.component';
import { MandarLimpiezaHabitacionComponent } from './mandar-limpieza-habitacion/mandar-limpieza-habitacion.component';
import { MandarSupervisarHabitacionComponent } from './mandar-supervisar-habitacion/mandar-supervisar-habitacion.component';

const routes: Routes = [
  {path: 'enviarLimpieza', component: MandarLimpiezaHabitacionComponent},
  {path: 'limpieza', component: LimpiezaHabitacionComponent},
  {path: 'supervisar', component: MandarSupervisarHabitacionComponent},
  {path: 'liberar', component: LiberarHabitacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalidaRoutingModule { }
