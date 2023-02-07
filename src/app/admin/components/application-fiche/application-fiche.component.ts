import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, withLatestFrom } from 'rxjs';
import { Application } from 'src/app/models/application.interface';
import { Role } from 'src/app/models/role.interface';
import { User } from 'src/app/models/user.interface';
import { ApplicationService } from '../../providers/application.service';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-application-fiche',
  templateUrl: './application-fiche.component.html',
  styleUrls: ['./application-fiche.component.scss']
})
export class ApplicationFicheComponent implements OnInit {

  application$: Observable<Application>
  id: number
  users$: Observable<User[]>
  userEmail: string
  roles$: Observable<Role[]>

  constructor(private route: ActivatedRoute
    ,private router: Router
    ,private applicationService: ApplicationService
    ,private userService: UserService) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.application$ = this.applicationService.getById(params['id'])

      this.id = params['id']

      this.roles$ = this.applicationService.getRoles()
      this.users$ = this.userService.get().pipe(withLatestFrom(this.application$),map(([users, app]) => {
        return users.filter(user => !app.users?.find(u => u.id === user.id))
      }))

    })
  }

  edit() {
    this.router.navigate([`/admins/applications/edit/${this.id}`])
  }

  delete() {
    this.users$.subscribe(users => {
      console.log(users)
    })
  }

  onSortChange($event:any) {
    this.userEmail = $event.target.value
  }

  addUser() {
    this.application$.pipe(withLatestFrom(this.users$),map(([app,users]) => {
      app.users?.push(users.find(user => user.email === this.userEmail) as User)
      return app
    })).subscribe(app => {
      console.log(app)
      this.applicationService.update(app)
    })
  }
}
