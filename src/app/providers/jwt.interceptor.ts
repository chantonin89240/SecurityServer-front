import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = JSON.parse(localStorage.getItem('token')!)

    if(token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token['token']}`}
      })
    }

    return next.handle(request);
  }
}
