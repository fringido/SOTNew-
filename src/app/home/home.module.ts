import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './services/home/home.service';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarHiddenComponent } from './components/sidebar-hidden/sidebar-hidden.component';
import { PrimengModule } from '../core/modules/primeng/primeng.module';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MaterialModule } from '../core/modules/material/material.module';
import { SidenavDirective } from './directives/sidenav/sidenav.directive';
import { DarEntradaHabitacionComponent } from './components/dar-entrada-habitacion/dar-entrada-habitacion.component';
import { RoomTypesModule } from '../room-types/room-types.module';
import { CutStringPipe } from '../core/pipes/cut-string/cut-string.pipe';
import { SidebarModule } from '../sidebar/sidebar.module';
import { EntradaHabitacionModule } from './inicio-habitaciones/entrada-habitacion/entrada-habitacion.module';
import { FormsModule } from '@angular/forms';
import { LogoutDirective } from './directives/logout/logout.directive';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarHiddenComponent,
    NavMenuComponent,
    SidenavDirective,
    LayoutComponent,
    DarEntradaHabitacionComponent,
    LogoutDirective,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimengModule,
    MaterialModule,
    RoomTypesModule,
    FormsModule,
    MaterialModule,
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
