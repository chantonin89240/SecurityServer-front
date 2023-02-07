import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  
  parentForm: FormGroup
  user$: Observable<User>
  create: boolean
  title: string
  titleBtn: string

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.create = false
        this.title = 'Edit user'
        this.titleBtn = 'Save'

        this.user$ = this.userService.getById(params['id'])

        this.user$.subscribe(user => {
          console.log(user)

          this.parentForm = this.formBuilder.group({
            id: [user.id],
            firstName: [user.firstname, Validators.required],
            lastName: [user.lastname, Validators.required],
            email: [user.email, Validators.required],
            url: [user.avatar, Validators.required]
          })
        })
       

      }
      else {
        this.create = true
        this.title = 'Create user'
        this.titleBtn = 'Create'

        this.parentForm = this.formBuilder.group({
          id: [0],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', Validators.required],
          url: ['', Validators.required]
        })
      }

    })

  }

  onSubmit() {
    let user : User = {
      id: this.parentForm.value.id,
      firstname: this.parentForm.value.firstName,
      lastname: this.parentForm.value.lastName,
      email: this.parentForm.value.email,
      avatar: this.parentForm.value.url
    }

    console.log(user)

    if(user.id === 0) {
      this.userService.post(user).subscribe(()=> {
        this.router.navigate(['/admins/users'])
      })
    }
    else {
      console.log(user)
      this.userService.update(user).subscribe(() => {
        this.router.navigate(['/admins/users'])
      })
    }
    
  }
}
