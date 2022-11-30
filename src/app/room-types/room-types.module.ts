import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomTypesComponent } from './room-types.component';
import { RoomComponent } from './components/room/room.component';
import { MaterialModule } from '../core/modules/material/material.module';



@NgModule({
  declarations: [
    RoomTypesComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    RoomTypesComponent,
  ]
})
export class RoomTypesModule { }
