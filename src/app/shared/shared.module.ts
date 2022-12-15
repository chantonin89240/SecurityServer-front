import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { TextAreaComponent } from './components/text-area/text-area.component';


@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    TextAreaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    TextAreaComponent
  ]
})
export class SharedModule { }
