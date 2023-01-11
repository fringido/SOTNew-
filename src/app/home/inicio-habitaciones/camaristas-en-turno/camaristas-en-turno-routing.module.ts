import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamaristasEnTurnoComponent } from './camaristas-en-turno.component';

const routes: Routes = [{ path: '', component: CamaristasEnTurnoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamaristasEnTurnoRoutingModule { }
