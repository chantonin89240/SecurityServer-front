import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Application } from 'src/app/models/application.interface';
import { ApplicationService } from '../../providers/application.service';

@Component({
  selector: 'app-application-edit',
  templateUrl: './application-edit.component.html',
  styleUrls: ['./application-edit.component.scss']
})
export class ApplicationEditComponent implements OnInit {

  parentForm: FormGroup
  application : Application

  constructor(private formBuilder: FormBuilder
    ,private applicationService: ApplicationService
    ,private router: Router) {
    
  }

  ngOnInit() {
    this.parentForm = this.formBuilder.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onSubmit() {
    this.application = {
      id: 0,
      name: this.parentForm.value.name,
      url: this.parentForm.value.url,
      description: this.parentForm.value.description,
      clientSecret: null
    }

    this.applicationService.post(this.application).subscribe(() => {
      this.router.navigate(['/admins/applications'])
    })

    
  }
}
