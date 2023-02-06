import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Login } from '../models/login.interface';
import { AuthenticateService } from '../providers/authenticate.service';
import { finalize, first } from 'rxjs/operators';
import { userAuthenticate } from '../models/userAuthenticate.interface';
import { Router } from '@angular/router';
import { User } from '../models/user.interface';
import { LoginRedirect } from '../models/loginRedirect.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  parentForm: FormGroup
  login: Login
  submitted: boolean = false
  error: string = '';

  constructor(
    private formBuilder: FormBuilder
    ,private authenticateService: AuthenticateService
    ,private router: Router
    ) { }

  ngOnInit() {
    this.parentForm = this.formBuilder.group({
      email: ['jc@gmail.com', [Validators.required, Validators.email]],
      password: ['LK97VBGUOL', Validators.required]
    })
  }

  get formControls() {
    return this.parentForm.controls
  }

  onSubmit() {
    this.submitted = true

    if(this.parentForm.invalid) {
      return
    }

    this.login = {
      clientSecret: '5R56L4LBDE7UROMBUXFM5PQJLPJNGRP2FEUR',
      email: this.parentForm.value.email,
      password: this.parentForm.value.password
    }

    console.log(this.login)
    
    this.authenticateService.login(this.login)
      .subscribe({
        next: (n) => {
          console.log(n)

          this.authenticateService.getToken(n.codeGrant)
            .subscribe({
              next: (n) => {
                console.log(n)
                this.router.navigate(['/admins/applications'])

              },
              error: (e) => this.error = e.error.Message
            })
          


          /*let user: userAuthenticate = JSON.parse(localStorage.getItem('user')!)
          this.router.navigate(user.isadmin ? ['/admins/applications'] : ['/admins/applications'])*/
        },
        error: (e) => this.error = e.error.Message
      })
  }
}
