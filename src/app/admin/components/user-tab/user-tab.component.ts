import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.scss']
})
export class UserTabComponent {
  
  @Input() users!: User[]
  @Output() delete = new EventEmitter()

}
