import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.interface';
import { LoginRedirect } from '../models/loginRedirect.interface';
import { userAuthenticate } from '../models/userAuthenticate.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private readonly baseUrl: string =  environment.baseUrl

  constructor(private _httpClient: HttpClient) { }
  
  login(login: Login): Observable<LoginRedirect> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'})

    return this._httpClient.post<LoginRedirect>(`${this.baseUrl}auth`, login, {headers: headers})
  }

  logout() {
    localStorage.removeItem('token')
  }

  getToken(codeGrant: string) {
    return this._httpClient.post(`${this.baseUrl}GetAcces`, {codeGrant: codeGrant}).pipe(map(token => {
      if(token) {
        localStorage.setItem('token', JSON.stringify(token))
      }
      return token
    }))
  }
}
