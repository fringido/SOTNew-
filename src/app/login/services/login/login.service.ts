import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  
  constructor(private http: HttpClient) { }

  private url = environment.url;
  user: any
  private subLogin: BehaviorSubject<any> = new BehaviorSubject<any>({});

  public login: Observable<any> = this.subLogin.asObservable();

  data: any;

  // TODO: LoginModel
  Login(model: any) {
    return this.http.post(this.url + 'api/permisos/obtenerUsuarioPorCredencial', model);
  }
  
  // TODO: LoginModel
  Autorizacion(model: any) {
    return this.http.post(this.url + 'api/Permisos/Autorizacion',model);
  }

  setLogin(data: any): void {
    this.user = data;
    this.subLogin.next(data);
  }

  CambioContrasena(model: any)
  {
    return this.http.put(this.url + 'api/permisos/Contrasena', model);
  }
}
