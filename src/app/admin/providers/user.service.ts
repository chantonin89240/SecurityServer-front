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
    return this._httpClient.get<User[]>(`${this.baseUrl}users?`)
  }
}
