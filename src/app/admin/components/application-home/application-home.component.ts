import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  delete(event$: any) {
    this.applicationService.delete(event$.id).subscribe(response => {
      if(response) {
        this.applications$ = this.applications$.pipe(map((apps) => {
          return apps.filter(app => app.id !== event$.id)
        }))
      }
    })
  }
}
