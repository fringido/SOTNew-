import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesYPermisosComponent } from './roles-y-permisos.component';
import { AgregarEditarRolComponent } from './agregar-editar-rol/agregar-editar-rol.component';
import { ListaDeRolesComponent } from './lista-de-roles/lista-de-roles.component';


const routes: Routes = [
  {path: '' , component: RolesYPermisosComponent,
  children:[
    {path: '', component: AgregarEditarRolComponent},
    //{path: 'crear',component: AgregarEditarRolComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesYPermisosRoutingModule { }
