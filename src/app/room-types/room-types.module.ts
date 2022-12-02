import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomTypesComponent } from './room-types.component';
import { RoomComponent } from './components/room/room.component';
import { MaterialModule } from '../core/modules/material/material.module';
import { TimerPipe } from '../core/pipes/timer/timer.pipe';
import { CutStringPipe } from '../core/pipes/cut-string/cut-string.pipe';
import { NgxMasonryModule } from 'ngx-masonry';



@NgModule({
  declarations: [
    RoomTypesComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TimerPipe,
    CutStringPipe,
    NgxMasonryModule
  ],
  exports: [
    RoomTypesComponent,
  ]
})
export class RoomTypesModule { }
