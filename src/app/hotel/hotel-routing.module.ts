import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel.component';
import { RolesYPermisosModule } from './roles-y-permisos/roles-y-permisos.module';

const routes: Routes = [
  {path: '', component: HotelComponent},
  {path: 'rolesYPermisos', loadChildren: () => import('./roles-y-permisos/roles-y-permisos.module').then((m) => m.RolesYPermisosModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
