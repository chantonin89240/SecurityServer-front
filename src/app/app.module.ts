import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InputComponent } from './input/input.component';
import { LoginComponent } from './login/login.component';
import { ApplicationComponent } from './application/application.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ToolbarComponent,
    InputComponent,
    LoginComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'applications', component: ApplicationComponent}
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
