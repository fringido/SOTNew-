import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesYPermisosRoutingModule } from './roles-y-permisos-routing.module';
import { RolesYPermisosComponent } from './roles-y-permisos.component';
import { ListaDeRolesComponent } from './vistas/lista-de-roles/lista-de-roles.component';
import {DialogModule} from 'primeng/dialog';
import { AgregarEditarRolComponent } from './vistas/agregar-editar-rol/agregar-editar-rol.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {InputTextModule} from 'primeng/inputtext';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    RolesYPermisosComponent,
    ListaDeRolesComponent,
    AgregarEditarRolComponent,
  ],
  imports: [
    CommonModule,
    RolesYPermisosRoutingModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    OverlayPanelModule,
    InputTextModule,
    CoreModule
  ],

})
export class RolesYPermisosModule { }
