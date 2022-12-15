import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../core/services/localStorage/local-storage.service';
import { LoginErrorResponse } from './models/login-error-response.interface';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mensajeResultadoLogin: string = '';
  isFingerScannerDetected: boolean = false;
  usuarioLogin: string = '';
  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly loginService: LoginService,
    private readonly localStorageService: LocalStorageService,
    ) {
  }

  loginForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  isUserAndPasswordCorrect: boolean = true;
  showPassword: boolean = false;

  showCurtain = true;

  showCocinaButton = false;
  showBarButton = false;
  showChecadorButton = false;

  isCocinaFirstTap = false;
  isBarFirstTap = false;
  isChecadorFirstTap = false;

  behaviorCurtain = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showCurtain = false;
    }, 2000)
  }

  isRequiredError(formControl: string) {
    const control = this.loginForm.get(formControl);
    return control?.errors?.['required'] && control?.touched;
  }

  login() {
    if(this.loginForm.invalid) {
      return;
    }
    const {name, password} = this.loginForm.value;
    this.loginService.login(name!, password!).subscribe({
      next: (res) => {
        this.localStorageService.setItems({
          idUsuario: res.id,
          username: res.nombre,
          rol: res.rol.nombre,
          token: res.token,
          permisos: res.rol.permisos
        });
        this.isUserAndPasswordCorrect = true;
        this.router.navigate(['hotel']);
      },
      error: (err: LoginErrorResponse) => {
        this.isUserAndPasswordCorrect = false;
      },
    });
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
