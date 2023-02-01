import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  users$: Observable<User[]>
  deleteModalStyle: string
  event$: any

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.users$ = this.userService.get()
    this.deleteModalStyle = 'none'

  }

  delete() {    
      this.userService.delete(this.event$.id).subscribe(response => {
        if(response) {
          this.users$ = this.users$.pipe(map((users) => {
            return users.filter(user => user.id !== this.event$.id)
          }))

          this.deleteModalStyle = 'none'
        }
      })
  }

  openDeleteModal(event$: any) {
    this.deleteModalStyle = 'block'
    this.event$ = event$
  }

  closeDeleteModal() {
    this.deleteModalStyle = 'none'
  }
}
