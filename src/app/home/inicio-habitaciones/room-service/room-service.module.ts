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
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { BootstrapModule } from 'src/app/core/modules/bootstrap/bootstrap.module';

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
    ScrollPanelModule,
    NgbCollapseModule,
    InputNumberModule,
    InputTextareaModule,
    BootstrapModule
  ]
})
export class RoomServiceModule { }
