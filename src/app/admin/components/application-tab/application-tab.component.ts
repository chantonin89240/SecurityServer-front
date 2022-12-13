import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../../../models/application.interface';

@Component({
  selector: 'app-application-tab',
  templateUrl: './application-tab.component.html',
  styleUrls: ['./application-tab.component.scss']
})
export class ApplicationTabComponent {

  @Input() applications!: Application[]
  //@Input() applications$! : Observable<Application[]>

}
