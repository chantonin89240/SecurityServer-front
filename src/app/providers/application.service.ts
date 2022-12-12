import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Application } from '../models/application.interface';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private readonly baseUrl: string = 'https://functionbackend-p2-g5.azurewebsites.net/api/'

  constructor(private _httpClient: HttpClient) { }
  
  get(): Observable<Application[]> {
    return this._httpClient.get<Application[]>(`${this.baseUrl}/GetApplications`)
  }
}
