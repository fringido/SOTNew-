import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mensajeResultadoLogin: string = '';
  usuarioLogin: string = '';
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router,
    private readonly fb: FormBuilder
    ) {
  }

  loginForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  showPassword: boolean = false;

  showCortina = true;

  showCocinaButton = false;
  showBarButton = false;
  showChecadorButton = false;

  isCocinaFirstTap = false;
  isBarFirstTap = false;
  isChecadorFirstTap = false;

  behaviorCortina = true;

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value)
  }
}
