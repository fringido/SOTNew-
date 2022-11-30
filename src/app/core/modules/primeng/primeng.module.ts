import { NgModule } from '@angular/core';
import {DialogModule, Dialog} from 'primeng/dialog';
import { NgmodalDirective } from '../../directives/ngmodal.directive';
import {SidebarModule} from 'primeng/sidebar';



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
    NgmodalDirective,
    SidebarModule
  ]
})
export class PrimengModule { }
