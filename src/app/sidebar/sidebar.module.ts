import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar.component';
import { CutStringPipe } from '../core/pipes/cut-string/cut-string.pipe';
import { RoomsMenuComponent } from './pages/rooms-menu/rooms-menu.component';
import { RoomTypesModule } from '../room-types/room-types.module';
import { SidebarService } from './services/sidebar/sidebar.service';
import { PrimengModule } from '../core/modules/primeng/primeng.module';
import { MaterialModule } from '../core/modules/material/material.module';


@NgModule({
  declarations: [SidebarComponent,RoomsMenuComponent],
  imports: [
    CommonModule,
    CutStringPipe,
    RoomTypesModule,
    PrimengModule,
    MaterialModule
  ],
  exports: [
    SidebarComponent,
  ],
  providers: [
    SidebarService
  ]
})
export class SidebarModule { }
