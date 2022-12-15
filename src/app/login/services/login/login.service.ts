import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginResponse } from '../../models/login-response.interface';

@Injectable()
export class LoginService {

    private readonly baseUrl = environment.url;

  constructor(
    private readonly http: HttpClient
  ) {}
  
  login(user: string, password: string) {
    return this.http.post<LoginResponse>(this.baseUrl + '/auth/login', {nombre: user, password});
  }
}
