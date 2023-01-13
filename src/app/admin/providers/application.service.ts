import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Application } from '../../models/application.interface';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private readonly baseUrl: string = environment.baseUrl

  constructor(private _httpClient: HttpClient) { }
  
  get(): Observable<Application[]> {
    return this._httpClient.get<Application[]>(`${this.baseUrl}applications?`)
  }

  getById(id: number): Observable<Application> {
    return this._httpClient.get<Application>(`${this.baseUrl}application/${id}?`)
  }

  post(application: Application) {
    return this._httpClient.post<any>(`${this.baseUrl}application/create?`, application)
  }

  update(application: Application) {
    return this._httpClient.put<Application>(`${this.baseUrl}application/update?`, application)
  }

  delete(id: number) {
    return this._httpClient.delete<any>(`${this.baseUrl}application/${id}`)
  }
}
