import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiberarHabitacionComponent } from './liberar-habitacion/liberar-habitacion.component';
import { LimpiezaHabitacionComponent } from './limpieza-habitacion/limpieza-habitacion.component';
import { MandarLimpiezaHabitacionComponent } from './mandar-limpieza-habitacion/mandar-limpieza-habitacion.component';
import { MandarSupervisarHabitacionComponent } from './mandar-supervisar-habitacion/mandar-supervisar-habitacion.component';

const routes: Routes = [
  { path: 'enviarLimpieza/:roomNumber', component: MandarLimpiezaHabitacionComponent},
  { path: 'limpieza/:roomNumber', component: LimpiezaHabitacionComponent},
  { path: 'supervisar/:roomNumber', component: MandarSupervisarHabitacionComponent},
  { path: 'liberar/:roomNumber', component: LiberarHabitacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalidaRoutingModule { }
