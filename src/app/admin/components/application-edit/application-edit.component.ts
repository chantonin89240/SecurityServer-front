import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
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

  constructor(private formBuilder: FormBuilder, private applicationService: ApplicationService) {
    
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
      name: this.parentForm.value.name,
      url: this.parentForm.value.url,
      description: this.parentForm.value.description,
      claim: ''
    }

    this.applicationService.post(this.application)
  }
}
