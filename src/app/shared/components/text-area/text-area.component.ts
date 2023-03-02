import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {

  actif: boolean = false

  @Input() parentForm: FormGroup
  @Input() name: string
  @Input() placeholder: string

  constructor() { }
}
