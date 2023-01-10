import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SkeletonModule} from 'primeng/skeleton';
import { LoaderBigComponentComponent } from './components/loader-big-component/loader-big-component.component';
import { AuthComponent } from './components/auth/auth.component';
import { PrimengModule } from './modules/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoaderBigComponentComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    NgbModule,
    SkeletonModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  exports:[
    LoaderBigComponentComponent,
    AuthComponent
  ]
})
export class CoreModule {
}
