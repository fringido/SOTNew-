import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesYPermisosRoutingModule } from './roles-y-permisos-routing.module';
import { RolesYPermisosComponent } from './roles-y-permisos.component';
import { ListaDeRolesComponent } from './lista-de-roles/lista-de-roles.component';


@NgModule({
  declarations: [
    RolesYPermisosComponent,
    ListaDeRolesComponent,

  ],
  imports: [
    CommonModule,
    RolesYPermisosRoutingModule
  ]
})
export class RolesYPermisosModule { }
