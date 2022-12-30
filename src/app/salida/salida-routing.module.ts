import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LimpiezaHabitacionComponent } from './limpieza-habitacion/limpieza-habitacion.component';
import { MandarLimpiezaHabitacionComponent } from './mandar-limpieza-habitacion/mandar-limpieza-habitacion.component';

const routes: Routes = [
  {path: 'enviar-limpieza', component: MandarLimpiezaHabitacionComponent},
  {path: 'limpieza', component: LimpiezaHabitacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalidaRoutingModule { }
