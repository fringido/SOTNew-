import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeService } from './services/home/home.service';
import { SidebarHiddenComponent } from './components/sidebar-hidden/sidebar-hidden.component';
import { PrimengModule } from '../core/modules/primeng/primeng.module';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    SidebarHiddenComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimengModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
