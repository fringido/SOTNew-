import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesYPermisosRoutingModule } from './roles-y-permisos-routing.module';
import { RolesYPermisosComponent } from './roles-y-permisos.component';
import { ListaRolesComponent } from './vistas/lista-roles/lista-roles.component';
import { CrearModificarPermisosComponent } from './vistas/crear-modificar-permisos/crear-modificar-permisos.component';


@NgModule({
  declarations: [
    RolesYPermisosComponent,
    ListaRolesComponent,
    CrearModificarPermisosComponent
  ],
  imports: [
    CommonModule,
    RolesYPermisosRoutingModule
  ]
})
export class RolesYPermisosModule { }
