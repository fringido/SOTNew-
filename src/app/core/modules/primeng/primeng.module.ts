import { NgModule } from '@angular/core';
import {DialogModule, Dialog} from 'primeng/dialog';
import { NgmodalDirective } from '../../directives/ngmodal.directive';
import {SidebarModule} from 'primeng/sidebar';
import {AccordionModule} from 'primeng/accordion';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    NgmodalDirective,
  ],
  imports: [
    DialogModule
  ],
  providers:[Dialog, DialogService],
  exports: [
    DialogModule,
    NgmodalDirective,
    SidebarModule,
    AccordionModule,
    DynamicDialogModule
  ]
})
export class PrimengModule { }
