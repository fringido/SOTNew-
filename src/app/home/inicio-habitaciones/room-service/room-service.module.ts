import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { RoomServiceRoutingModule } from './room-service-routing.module';
import { RoomServiceComponent } from './room-service.component';
import { CrearComandaRoomserviceComponent } from './vistas/crear-comanda-roomservice/crear-comanda-roomservice.component';


@NgModule({
  declarations: [
    RoomServiceComponent,
    CrearComandaRoomserviceComponent
  ],
  imports: [
    CommonModule,
    RoomServiceRoutingModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollPanelModule
  ]
})
export class RoomServiceModule { }
