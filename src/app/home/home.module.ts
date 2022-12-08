import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeService } from './services/home/home.service';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarHiddenComponent } from './components/sidebar-hidden/sidebar-hidden.component';
import { PrimengModule } from '../core/modules/primeng/primeng.module';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MaterialModule } from '../core/modules/material/material.module';
import { SidenavDirective } from './directives/sidenav.directive';
import { DarEntradaHabitacionComponent } from './components/dar-entrada-habitacion/dar-entrada-habitacion.component';
import { RoomTypesModule } from '../room-types/room-types.module';
import { CutStringPipe } from '../core/pipes/cut-string/cut-string.pipe';
import { EntradaHabitacionModule } from './inicio-habitaciones/entrada-habitacion/entrada-habitacion.module';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    SidebarHiddenComponent,
    NavMenuComponent,
    SidenavDirective,
    LayoutComponent,
    DarEntradaHabitacionComponent
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
    MatSidenavModule,
    CutStringPipe
  ],
  providers: [
    HomeService,
  ]
})

export class HomeModule { }
