import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './forms/loginform/loginform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupformComponent } from './forms/signupform/signupform.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupformComponent
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
