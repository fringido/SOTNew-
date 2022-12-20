import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SkeletonModule} from 'primeng/skeleton';
import { LoaderBigComponentComponent } from './components/loader-big-component/loader-big-component.component';
@NgModule({
  declarations: [
    LoaderBigComponentComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    NgbModule,
    SkeletonModule
  ],
  exports:[
    LoaderBigComponentComponent
  ]
})
export class CoreModule {
}
