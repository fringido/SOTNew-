import { NgModule } from '@angular/core';
import {DialogModule, Dialog} from 'primeng/dialog';
import { NgmodalDirective } from '../../directives/ngmodal.directive';



@NgModule({
  declarations: [
    NgmodalDirective,
  ],
  imports: [
    DialogModule
  ],
  providers:[Dialog],
  exports: [
    DialogModule,
    NgmodalDirective
  ]
})
export class PrimengModule { }
