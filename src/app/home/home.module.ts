import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './services/home/home.service';
import { AgregarEditarRolComponent } from './modals/roles-y-permisos/agregar-editar-rol/agregar-editar-rol.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { EntradaHabitacionModule } from './inicio-habitaciones/entrada-habitacion/entrada-habitacion.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarHiddenComponent } from './components/sidebar-hidden/sidebar-hidden.component';
import { PrimengModule } from '../core/modules/primeng/primeng.module';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MaterialModule } from '../core/modules/material/material.module';
import { SidenavDirective } from './directives/sidenav.directive';
import { RoomTypesModule } from '../room-types/room-types.module';
import { CutStringPipe } from '../core/pipes/cut-string/cut-string.pipe';
import { SidebarModule } from '../sidebar/sidebar.module';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarHiddenComponent,
    NavMenuComponent,
    SidenavDirective,
    LayoutComponent,
    AgregarEditarRolComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimengModule,
    MaterialModule,
    RoomTypesModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    OverlayPanelModule,
    EntradaHabitacionModule,
    CutStringPipe,
    SidebarModule
  ],
  providers: [
    HomeService
  ],
})

export class HomeModule { }
