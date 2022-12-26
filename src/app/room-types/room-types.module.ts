import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomTypesComponent } from './room-types.component';
import { RoomComponent } from './components/room/room.component';
import { MaterialModule } from '../core/modules/material/material.module';
import { TimerPipe } from '../core/pipes/timer/timer.pipe';
import { CutStringPipe } from '../core/pipes/cut-string/cut-string.pipe';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { PrimengModule } from '../core/modules/primeng/primeng.module';
import { BootstrapModule } from '../core/modules/bootstrap/bootstrap.module';
import { MessageModalAutoclosableComponent } from '../core/components/message-modal-autoclosable/message-modal-autoclosable.component';
import { RoomService } from './services/room/room.service';

@NgModule({
  declarations: [
    RoomTypesComponent,
    RoomComponent,
    RoomDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TimerPipe,
    CutStringPipe,
    PrimengModule,
    BootstrapModule,
    MessageModalAutoclosableComponent,
  ],
  providers: [
    RoomService
  ],
  exports: [
    RoomTypesComponent,
    RoomDetailsComponent
  ]
})
export class RoomTypesModule { }
