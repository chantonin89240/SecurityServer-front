import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticateService } from './authenticate.service';
import { Login } from '../models/login.interface';
import { LoginRedirect } from '../models/loginRedirect.interface';
import { environment } from 'src/environments/environment';

describe('AuthenticateService', () => {
  let service: AuthenticateService;
  let httpMock: HttpTestingController;
  var baseUrl: string =  environment.baseUrl

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticateService]
    });
    service = TestBed.inject(AuthenticateService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login and return LoginRedirect', () => {
    const login: Login = { email: 'eval@gmail.com', password: 'SI5STKYGY3' , clientSecret: '5R56L4LBDE7UROMBUXFM5PQJLPJNGRP2FEUR'};

    service.login(login).subscribe((response: LoginRedirect) => {
      expect(response).toContain(response.codeGrant);
    });


    const req = httpMock.expectOne(`${baseUrl}auth`);
    expect(req.request.method).toEqual('POST');
    
  });

  it('should logout and remove token from localStorage', () => {
    spyOn(localStorage, 'removeItem');
    service.logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });

  it('should get token and store in localStorage', () => {
    const codeGrant = '1234';
    const token = 'test token';

    service.getToken(codeGrant).subscribe((response) => {
      expect(response).toEqual(token);
    });

    const req = httpMock.expectOne(`${baseUrl}GetAccess`);
    expect(req.request.method).toEqual('POST');
    req.flush(token);

    expect(localStorage.getItem('token')).toEqual(JSON.stringify(token));
  });
});