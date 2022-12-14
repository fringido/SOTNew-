import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamaristasEnTurnoRoutingModule } from './camaristas-en-turno-routing.module';
import { PrimengModule } from 'src/app/core/modules/primeng/primeng.module';
import { CamaristasEnTurnoComponent } from './camaristas-en-turno.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CamaristasEnTurnoComponent
  ],
  imports: [
    CommonModule,
    CamaristasEnTurnoRoutingModule,
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class CamaristasEnTurnoModule { }
