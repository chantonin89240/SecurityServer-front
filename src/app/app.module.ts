import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InputComponent } from './input/input.component';
import { LoginComponent } from './login/login.component';
import { ApplicationComponent } from './application/application.component';
import { ApplicationTabComponent } from './application-tab/application-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ToolbarComponent,
    InputComponent,
    LoginComponent,
    ApplicationComponent,
    ApplicationTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
