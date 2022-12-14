import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarRolComponent } from './vistas/agregar-editar-rol/agregar-editar-rol.component';
import { ListaDeRolesComponent } from './vistas/lista-de-roles/lista-de-roles.component';

const routes: Routes = [
  {path: '' , component: ListaDeRolesComponent},
  {path: 'agregar', component: AgregarEditarRolComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesYPermisosRoutingModule { }
