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
import { LiberarPagarRoomServiceComponent } from './vistas/liberar-pagar-room-service/liberar-pagar-room-service.component';
import { PagoComandasComponent } from './vistas/pago-comandas/pago-comandas.component';
import { PagoTarjetaComponent } from './vistas/pago-comandas/pago-tarjeta/pago-tarjeta.component';
import { PagoMixtoComponent } from './vistas/pago-comandas/pago-mixto/pago-mixto.component';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';




@NgModule({
  declarations: [
    RoomServiceComponent,
    CrearComandaRoomserviceComponent,
    LiberarPagarRoomServiceComponent,
    PagoComandasComponent,
    PagoTarjetaComponent,
    PagoMixtoComponent
  ],
  imports: [
    CommonModule,
    RoomServiceRoutingModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollPanelModule,
    CheckboxModule,
    NgbCollapseModule,
    RadioButtonModule,
    InputNumberModule,
    InputTextareaModule,
    BootstrapModule,
    DropdownModule,
    InputMaskModule
  ]
})
export class RoomServiceModule { }
