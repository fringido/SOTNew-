import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservacionComponent } from './reservacion.component';
import { AsignarReservacionComponent } from './vistas/asignar-reservacion/asignar-reservacion.component';

const routes: Routes = [{ path: '', component: AsignarReservacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservacionRoutingModule { }
