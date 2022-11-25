import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationEditComponent } from './application-edit/application-edit.component';
import { ApplicationComponent } from './application/application.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: LoginComponent},
    {path: 'applications', component: ApplicationComponent},
    {path: 'applications-edit', component: ApplicationEditComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
