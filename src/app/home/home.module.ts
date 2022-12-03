import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeService } from './services/home/home.service';
import { SidebarHiddenComponent } from './components/sidebar-hidden/sidebar-hidden.component';
import { PrimengModule } from '../core/modules/primeng/primeng.module';
import { AgregarEditarRolComponent } from './modals/roles-y-permisos/agregar-editar-rol/agregar-editar-rol.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { EntradaHabitacionModule } from './inicio-habitaciones/entrada-habitacion/entrada-habitacion.module';
import { LayoutComponent } from './components/layout/layout.component';
@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent,
        SidebarHiddenComponent,
        AgregarEditarRolComponent,
        LayoutComponent,
    ],
    providers: [
        HomeService,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        PrimengModule,
        ToggleButtonModule,
        FormsModule,
        ReactiveFormsModule,
        OverlayPanelModule,
        EntradaHabitacionModule
    ],
})
export class HomeModule { }
