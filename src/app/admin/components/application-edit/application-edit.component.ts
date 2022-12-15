import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-application-edit',
  templateUrl: './application-edit.component.html',
  styleUrls: ['./application-edit.component.scss']
})
export class ApplicationEditComponent implements OnInit {

  parentForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.parentForm = this.formBuilder.group({
      name: ['', Validators.required],
      url: ['', Validators.required]
    })
  }

  submit() {
    console.log(this.parentForm.value)
  }
}
