import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComandaRoomserviceComponent } from './vistas/crear-comanda-roomservice/crear-comanda-roomservice.component';
import { LiberarPagarRoomServiceComponent } from './vistas/liberar-pagar-room-service/liberar-pagar-room-service.component';
import { PagoComandasComponent } from './vistas/pago-comandas/pago-comandas.component';

const routes: Routes = [
  { path: ':roomNumber', component: CrearComandaRoomserviceComponent },
  { path: 'comandas/:roomNumber',component:LiberarPagarRoomServiceComponent },
  { path: 'pago/:roomNumber', component:PagoComandasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomServiceRoutingModule { }
