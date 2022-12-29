import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MandarLimpiezaHabitacionComponent } from './mandar-limpieza-habitacion/mandar-limpieza-habitacion.component';

const routes: Routes = [
  {path: '', component: MandarLimpiezaHabitacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalidaRoutingModule { }
