import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Application } from 'src/app/models/application.interface';
import { ApplicationService } from '../../providers/application.service';

@Component({
  selector: 'app-application-edit',
  templateUrl: './application-edit.component.html',
  styleUrls: ['./application-edit.component.scss']
})
export class ApplicationEditComponent implements OnInit {

  parentForm: FormGroup
  application$: Observable<Application>
  title: string
  titleBtn: string
  create: boolean

  constructor(private formBuilder: FormBuilder
    ,private applicationService: ApplicationService
    ,private router: Router
    ,private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id']) {
        this.create = false
        this.title = 'Edit application'
        this.titleBtn = 'Save'

        this.application$ = this.applicationService.getById(params['id'])
        
        this.application$.subscribe(app => {
          console.log(app)
          this.parentForm = this.formBuilder.group({
            id: [app.id],
            name: [app.name, Validators.required],
            url: [app.url, Validators.required],
            description: [app.description, Validators.required]
          })
        })
      }
      else {

        this.create = true
        this.title = 'Create application'
        this.titleBtn = 'Create'

        this.parentForm = this.formBuilder.group({
          id: [0],
          name: ['', Validators.required],
          url: ['', Validators.required],
          description: ['', Validators.required]
        })
      }
    })

    
  }

  onSubmit() {
    let application = {
      id: this.parentForm.value.id,
      name: this.parentForm.value.name,
      url: this.parentForm.value.url,
      description: this.parentForm.value.description,
      clientSecret: null,
      users: null
    }

    if(application.id === 0) {
      this.applicationService.post(application).subscribe(() => {
        this.router.navigate(['/admins/applications'])
      })
    }
    else {
      console.log(application)
      this.applicationService.update(application).subscribe(() => {
        this.router.navigate(['/admins/applications'])
      })
    }

    
  }
}
