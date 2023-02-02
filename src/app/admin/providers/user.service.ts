import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl: string = environment.baseUrl

  constructor(private _httpClient: HttpClient) { }

  get() {
    return this._httpClient.get<User[]>(`${this.baseUrl}users`)
  }

  getById(id: number) {
    return this._httpClient.get<User>(`${this.baseUrl}user/${id}`)
  }

  post(user: User) {
    return this._httpClient.post<any>(`${this.baseUrl}user/create`, user)
  }

  update(user: User) {
    return this._httpClient.put<User>(`${this.baseUrl}user/update`, user)
  }

  delete(id: number) {
    return this._httpClient.delete<any>(`${this.baseUrl}user/${id}`)
  }
}
