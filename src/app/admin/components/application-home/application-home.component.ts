import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../../../models/application.interface';
import { ApplicationService } from '../../providers/application.service';

@Component({
  selector: 'app-application-home',
  templateUrl: './application-home.component.html',
  styleUrls: ['./application-home.component.scss']
})
export class ApplicationHomeComponent implements OnInit {

  applications$: Observable<Application[]>

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applications$ = this.applicationService.get()
  }

  delete() {
    console.log('delete')
    this.applicationService.delete(0)
  }
}
