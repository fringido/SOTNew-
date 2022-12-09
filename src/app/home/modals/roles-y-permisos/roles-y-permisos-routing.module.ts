import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarRolComponent } from './agregar-editar-rol/agregar-editar-rol.component';
import { ListaDeRolesComponent } from './lista-de-roles/lista-de-roles.component';


const routes: Routes = [
  {path: '' , component: AgregarEditarRolComponent},
  {path: 'agregar', component: ListaDeRolesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesYPermisosRoutingModule { }
