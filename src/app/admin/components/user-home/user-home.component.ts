import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  users$: Observable<User[]>

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.get()
  }
}
