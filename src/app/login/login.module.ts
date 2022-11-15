import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login/login.service';
import { MenuButtonDirective } from './directives/menuButton/menu-button.directive';


@NgModule({
  declarations: [
    LoginComponent,
    MenuButtonDirective,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
