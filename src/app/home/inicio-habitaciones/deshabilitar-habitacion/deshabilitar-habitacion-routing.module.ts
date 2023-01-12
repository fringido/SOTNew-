import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeshabilitarHabitacionComponent } from './deshabilitar-habitacion.component';

const routes: Routes = [{ path: ':roomNumber', component: DeshabilitarHabitacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeshabilitarHabitacionRoutingModule { }
