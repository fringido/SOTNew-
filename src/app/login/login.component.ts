import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription, of } from 'rxjs';
import { MenuButtons } from './models/menu-buttons.enum';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Huella
  timeTnterval: number = 0;
  static fingerScannerObservable: Subscription = new Subscription();
  static fingerLoginObservable: Subscription = new Subscription();
  mensajeScannerDetectado: string = 'No se encontro el lector de huellas.';
  mensajeResultadoLogin: string = '';
  usuarioLogin: string = '';
  fingerButtonColor: string = 'btn-gray fingerButtonClass';
  fingerButtonLogo: string = 'icon-manita_fingerprint';
  checador              !: boolean
  constructor(
    private readonly loginService: LoginService,
    //  private utilitiesService: UtilitiesService,
    //  private fingerService: FingerPrintService,
    //  private socketService: SocketsService,
    //  private modal: ModalService,
    private readonly router: Router,
    private readonly fb: FormBuilder
    ) {
    localStorage.removeItem("userstr");
    localStorage.removeItem("valorVerificarStr");
  }

  loginForm = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  showPassword: boolean = false;

  //  TODO: LoginModel
  loginModel: any = {
    identificadorUsuario: '',
    sinValor: false,
    // valorVerificarBin: '',
    tipoCredencial: 1,
    valorVerificarStr: ''
  };

  intentos = 0;

  showCortina = true;

  showCocinaButton = false;
  showBarButton = false;
  showChecadorButton = false;

  isCocinaFirstTap = false;
  isBarFirstTap = false;
  isChecadorFirstTap = false;

  behaviorCortina = true;
  AsignarHabitaciones!: any;
  CobrarHabitaciones!: any;
  ConsultarComanda!: any;

  ngOnInit(): void {
    let topNavBar = document.getElementById('topNavBar');
    topNavBar != null ? topNavBar.classList.add('displayNone') : null;

    let user = sessionStorage['user'];

    if ((user == null || user == undefined)) {
      this.router.navigate(['/login']);
    }
    // Iniciar Servicios Huella
    this.startFingerprintServices();
    setTimeout(() => {
      this.showCortina = false;
    }, 2000)
  }

  ngOnDestroy(): void {
    this.stopFingerprintServices();
  }

  stopFingerprintServices() {
    //this.fingerService.stopAcquisition();
    LoginComponent.fingerScannerObservable.unsubscribe();
    LoginComponent.fingerLoginObservable.unsubscribe();
    clearInterval(this.timeTnterval);
  }

  public startFingerprintServices() {
    this.fingerDevicesInterval();
    this.initFingerScanner();
  }

  fingerDevicesInterval() {
    this.timeTnterval = setInterval(async () => {
      // TODO: fingerptintService
      // if (this.fingerService.devices.length) {
      this.fingerButtonColor = 'btn-redBold fingerButtonClass';
      this.mensajeScannerDetectado = '';
      // }
      // else {
      this.fingerButtonColor = 'btn-gray fingerButtonClass';
      this.fingerButtonLogo = 'icon-manita_fingerprint';
      this.mensajeScannerDetectado = 'No se encontro el lector de huellas.';
      // }
    }, 1500) as any;
  }

  initFingerScanner() {
    // LoginComponent.fingerScannerObservable = this.fingerService
    //   .samplesAcquiredObservable()
    //   .subscribe((raw) => {
    //     if ($('#cortina').hasClass('fadeOutUp')) {
    //       this.fingerButtonLogo = 'fa fa-spinner mt-2vh';
    //       this.mensajeResultadoLogin = 'Validando...';
    //       this.sentFingerLogin(raw);
    //     }

    //   });
  }

  // TODO: Raw
  sentFingerLogin(raw: any) {
    // IndexloginComponent.fingerLoginObservable = this.fingerService.login(raw)
    of('')
      .subscribe((response) => {
        this.mensajeResultadoLogin = '';
        this.fingerButtonLogo = 'icon-manita_fingerprint';

        // Login
        const data = this.fingerprintResponse(response);
        this.ingresoUsuario(data);
      },
        (httpError: HttpErrorResponse) => {
          this.fingerButtonLogo = 'icon-manita_fingerprint';
          this.mensajeResultadoLogin = 'Huella no reconocida';
          setTimeout(() => {
            this.mensajeResultadoLogin = '';
          }, 2000);
          LoginComponent.fingerLoginObservable.unsubscribe();
        });
  }

  // TODO: loginFingerprintResponse
  fingerprintResponse(response: any) {
    console.log(response);
    const idRol = response.result.idRol
    const nombreRol = response.result.nombreRol
    const permisos = JSON.parse(response.result.usuario.Empleados[0].Puestos[0].Roles[0].permisos);
    return {
      result: {
        id: response.result.usuario.Empleados[0].Id,
        idUsuario: response.result.usuario.idUsuario,
        alias: response.result.usuario.Alias,
        idRol: idRol!,
        nombreRol: nombreRol!,
        user: response.result.token,
        permisos: {
          asignarHabitaciones: permisos.AsignarHabitaciones,
          cobrarHabitaciones: permisos.CobrarHabitaciones,
          consultarComandas: permisos.ConsultarComandas
        }
      }
    };
  };

  habilitarChecador() {
    this.stopFingerprintServices();
    // this.modal.openModalRedirect()
    this.router.navigateByUrl(`/login/checador`);
  }
  SessionOpen() {
    console.log(this.loginForm.value)
    // $('#usuarioNull').hide();
    // $('#PassNull').hide();
    // $('#usuarioContrasenaIncorrectos').hide();

    let esValidado = this.validationUsuario(this.loginModel.identificadorUsuario, this.loginModel.valorVerificarStr);

    if (esValidado) {

      this.loginService.Login(this.loginModel).subscribe((response: any) => {
        if (response.status == 200 && response.result.activo) {
          this.ingresoUsuario(response);
        } else {
          this.intentos++;

          if (this.intentos >= 3)
            1
          //   $('#btnRestablecerContrasena').show();

          // $('#usuarioContrasenaIncorrectos').show();
          // $('#loaderIndexLogin').modal('hide');//ocultamos el modal
          // $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
          // $('.modal-backdrop').remove();//eliminamos el backdrop del modal
        }

      });

    }
    else {
      // $('#loaderIndexLogin').modal('hide');//ocultamos el modal
      // $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
      // $('.modal-backdrop').remove();
    }
  }

  ingresoUsuario(response: any) {
    console.log('login: ', response);

    // $('#usuarioContrasenaIncorrectos').hide();
    // $('#loaderIndexLogin').modal('hide');//ocultamos el modal
    // $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
    // $('.modal-backdrop').remove();//eliminamos el backdrop del modal

    this.AsignarHabitaciones = response.result.permisos.asignarHabitaciones;
    this.CobrarHabitaciones = response.result.permisos.cobrarHabitaciones;
    this.ConsultarComanda = response.result.permisos.consultarComandas;

    console.log('model: ', this.loginModel);


    sessionStorage.setItem('identificadorUsuario', this.loginModel.identificadorUsuario);
    sessionStorage.setItem('tipoCredencial', this.loginModel.tipoCredencial.toString());
    sessionStorage.setItem('valorVerificarStr', this.loginModel.valorVerificarStr.toString());
    sessionStorage.setItem('AsignarHabitaciones', this.AsignarHabitaciones.toString());
    sessionStorage.setItem('CobrarHabitaciones', this.CobrarHabitaciones.toString());
    sessionStorage.setItem('ConsultarComanda', this.ConsultarComanda.toString());
    sessionStorage.setItem('idUsuario', response.result.idUsuario);
    sessionStorage.setItem('user', response.result.user);
    sessionStorage.setItem('username', response.result.alias);
    sessionStorage.setItem('idRol', response.result.idRol);
    sessionStorage.setItem('nombrerol', response.result.nombreRol);
    sessionStorage.setItem('permisos', JSON.stringify(response.result.permisos));
    sessionStorage.setItem('mostrarBotonComandasSalir', '0');

    /* NOTIFICACION */
    sessionStorage.setItem('Notificacion', "1");

    // this.socketService.login();

    // this.utilitiesService.objeto = this.loginModel;

    this.stopFingerprintServices();
    // $('#SelectModal').modal({ backdrop: 'static', keyboard: false })
    // $('#SelectModal').modal('toggle');
  }

  RedirectHotel() {
    // $('#SelectModal').modal('toggle');
    // Detiene los servicios de huella
    this.stopFingerprintServices();

    //this.router.navigate(['/hotel']);
    window.location.replace("hotel");
  }

  RedirectRestaurante(modal: boolean, isBar: number) {
    // modal ? $('#SelectModal').modal('toggle') : null;
    this.router.navigate(['/cocina-bar', isBar]);
  }

  RedirectRestablecerContrasenaModal() {
    // $('#restablecerContrasenaModal').modal('show');
  }

  RedirectSalirModalRestablecerContrasena() {
    // $('#restablecerContrasenaModal').modal('hide');//ocultamos el modal
    // $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
    // $('.modal-backdrop').remove();//eliminamos el backdrop del modal
  }

  RedirectAutorizarRestablecerContrasena() {
    // $("#restablecerContrasenaModal").modal('hide');//ocultamos el modal
    // $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
    // $('.modal-backdrop').remove();//eliminamos el backdrop del modal
    // $('#AutorizarModal').modal('show');
  }

  validationUsuario(usuario: any, pass: any) {
    var validado = true;

    if (usuario == null || usuario == undefined || usuario == "") {
      // $('#usuarioNull').show();
      return false;
    }

    if (pass == null || pass == undefined || pass == "") {
      // $('#PassNull').show();
      return false;
    }
    return validado;
  }

  verContrasena() {
    this.showPassword = !this.showPassword
  }
}
