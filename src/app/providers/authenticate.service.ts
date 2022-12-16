import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.interface';
import { userAuthenticate } from '../models/userAuthenticate.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private readonly baseUrl: string =  environment.baseUrl

  constructor(private _httpClient: HttpClient) { }
  
  login(login: Login): Observable<userAuthenticate> {
    
    return this._httpClient.post<userAuthenticate>(`${this.baseUrl}auth?`, login)
      .pipe(map(user => {
        if(user && user.token) {
          localStorage.setItem('user', JSON.stringify(user))
        }
        
        return user
      }))
  }

  logout() {
    localStorage.removeItem('user')
  }
}
