import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesYPermisosComponent } from './roles-y-permisos.component';
import { CrearModificarPermisosComponent } from './vistas/crear-modificar-permisos/crear-modificar-permisos.component';


const routes: Routes = [
  {path: '', component:RolesYPermisosComponent},
  {path: ':accion', component: CrearModificarPermisosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesYPermisosRoutingModule { }
