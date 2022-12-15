import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ApplicationHomeComponent } from './components/application-home/application-home.component';
import { ApplicationEditComponent } from './components/application-edit/application-edit.component';
import { ApplicationTabComponent } from './components/application-tab/application-tab.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ApplicationHomeComponent,
    ApplicationEditComponent,
    ApplicationTabComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
