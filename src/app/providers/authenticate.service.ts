import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private readonly baseUrl: string =  environment.baseUrl

  constructor(private _httpClient: HttpClient) { }
  
  login() {}
}
