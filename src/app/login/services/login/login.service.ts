import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  
  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;
  user: any
  private subLogin: BehaviorSubject<any> = new BehaviorSubject<any>({});

  public login: Observable<any> = this.subLogin.asObservable();

  data: any;

  // TODO: LoginModel
  Login(model: any) {
    return this.http.post(this.apiUrl + 'api/permisos/obtenerUsuarioPorCredencial', model);
  }
  
  // TODO: LoginModel
  Autorizacion(model: any) {
    return this.http.post(this.apiUrl + 'api/Permisos/Autorizacion',model);
  }

  setLogin(data: any): void {
    this.user = data;
    this.subLogin.next(data);
  }

  CambioContrasena(model: any)
  {
    return this.http.put(this.apiUrl + 'api/permisos/Contrasena', model);
  }
}
