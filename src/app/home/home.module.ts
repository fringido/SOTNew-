import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeService } from './services/home/home.service';
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
    MaterialModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
