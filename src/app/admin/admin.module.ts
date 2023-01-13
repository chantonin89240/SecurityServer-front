import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ApplicationHomeComponent } from './components/application-home/application-home.component';
import { ApplicationEditComponent } from './components/application-edit/application-edit.component';
import { ApplicationTabComponent } from './components/application-tab/application-tab.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplicationFicheComponent } from './components/application-fiche/application-fiche.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserTabComponent } from './components/user-tab/user-tab.component';


@NgModule({
  declarations: [
    ApplicationHomeComponent,
    ApplicationEditComponent,
    ApplicationTabComponent,
    ToolbarComponent,
    ApplicationFicheComponent,
    UserHomeComponent,
    UserTabComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
