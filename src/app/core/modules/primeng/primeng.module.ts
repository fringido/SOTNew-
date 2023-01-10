import { NgModule } from '@angular/core';
import {DialogModule, Dialog} from 'primeng/dialog';
import { NgmodalDirective } from '../../directives/ngmodal.directive';
import {SidebarModule} from 'primeng/sidebar';
import {AccordionModule} from 'primeng/accordion';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';


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
    DynamicDialogModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    InputNumberModule,
    CheckboxModule,
    InputTextareaModule,
    InputMaskModule,
    PasswordModule
  ]
})
export class PrimengModule { }
