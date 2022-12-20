import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComandaRoomserviceComponent } from './vistas/crear-comanda-roomservice/crear-comanda-roomservice.component';

const routes: Routes = [
  { path: '', component: CrearComandaRoomserviceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomServiceRoutingModule { }
