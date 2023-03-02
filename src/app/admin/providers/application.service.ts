import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Application } from '../../models/application.interface';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.interface';
import { Role } from 'src/app/models/role.interface';

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

  getRoles() {
    return this._httpClient.get<Role[]>(`${this.baseUrl}roles`)
  }

  getAppRoles(id: number) {
    return this._httpClient.get<Role[]>(`${this.baseUrl}rolesApp/${id}`)
  }

  deleteAppRole(idApp: number, idRole: number) {
    //TODO function deleteAppRole
  }

  addAppRole(idApp: number, idRole: number) {
    return this._httpClient.post<any>(`${this.baseUrl}role/add?`, {idApp: idApp, idRole: idRole})
  }
}
