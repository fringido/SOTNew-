import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocinabarRoutingModule } from './cocinabar-routing.module';
import { CocinabarComponent } from './cocinabar.component';
import { CocinabarService } from './services/cocinabar/cocinabar.service';
import { CommandComponent } from './components/command/command.component';
import { CommandColorDirective } from './directives/command-color.directive';

@NgModule({
  declarations: [
    CocinabarComponent,
    CommandComponent,
    CommandColorDirective
  ],
  imports: [
    CommonModule,
    CocinabarRoutingModule
  ],
  providers: [
    CocinabarService
  ]
})
export class CocinabarModule { }
