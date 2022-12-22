import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComandaRoomserviceComponent } from './vistas/crear-comanda-roomservice/crear-comanda-roomservice.component';
import { LiberarPagarRoomServiceComponent } from './vistas/liberar-pagar-room-service/liberar-pagar-room-service.component';

const routes: Routes = [
  { path: '', component: CrearComandaRoomserviceComponent },
  {path: 'comandas',component:LiberarPagarRoomServiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomServiceRoutingModule { }
