import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Application } from '../../models/application.interface';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private readonly baseUrl: string = environment.baseUrl

  constructor(private _httpClient: HttpClient) { }
  
  get(): Observable<Application[]> {
    return this._httpClient.get<Application[]>(`${this.baseUrl}GetApplications?`)
  }

  post(application: Application) {
    
    console.log(JSON.stringify(application))

    this._httpClient.post<any>(`${this.baseUrl}CreateApplication?`, JSON.stringify(application)).subscribe(data => {
      
    })
  }
}
