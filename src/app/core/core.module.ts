import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { HomeComponent } from '../home/home.component';
import { MessageModalAutoclosableComponent } from './components/message-modal-autoclosable/message-modal-autoclosable.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ModalComponent,
    MessageModalAutoclosableComponent,
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    NgbModule,
    HomeComponent
  ],
})
export class CoreModule {
}
