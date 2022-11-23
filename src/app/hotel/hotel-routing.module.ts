import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelModule } from './hotel.module';
import { RolesYPermisosComponent } from './roles-y-permisos/roles-y-permisos.component';


const routes: Routes = [
  {path: '', component: HotelModule},
  {path: 'rolesYPermisos', component: RolesYPermisosComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
