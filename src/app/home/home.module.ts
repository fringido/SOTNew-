import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
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


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    SidebarHiddenComponent,
    NavMenuComponent,
    SidenavDirective,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimengModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgregarEditarRolComponent,
    ToggleButtonModule,
    LayoutComponent,
    OverlayPanelModule,
    EntradaHabitacionModule
  ],
  providers: [
    HomeService
  ]
})

export class HomeModule { }
