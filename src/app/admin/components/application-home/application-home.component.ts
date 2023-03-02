import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  deleteModalStyle: string
  error: string
  parentForm: FormGroup
  event$: any

  constructor(private applicationService: ApplicationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.applications$ = this.applicationService.get()
    this.deleteModalStyle = 'none'
    this.error = 'none'

    this.parentForm = this.formBuilder.group({
      appName: ['', Validators.required],
    })
  }

  delete() {    
    if(this.parentForm.value.appName === this.event$.name) {
      this.applicationService.delete(this.event$.id).subscribe(response => {
        if(response) {
          this.applications$ = this.applications$.pipe(map((apps) => {
            return apps.filter(app => app.id !== this.event$.id)
          }))

          this.deleteModalStyle = 'none'
          this.error = 'none'
          this.parentForm.patchValue({appName:''})
        }
      })
    }
    else {
      this.error = 'block'
    }
  }

  openDeleteModal(event$: any) {
    this.deleteModalStyle = 'block'
    this.error = 'none'
    this.event$ = event$
  }

  closeDeleteModal() {
    this.deleteModalStyle = 'none'
    this.error = 'none'
    this.parentForm.patchValue({appName:''})
  }
}
