import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageModalAutoclosableComponent } from './components/message-modal-autoclosable/message-modal-autoclosable.component';

@NgModule({
  declarations: [
    LoaderComponent,
    MessageModalAutoclosableComponent,
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    NgbModule,
  ],
})
export class CoreModule {
}
