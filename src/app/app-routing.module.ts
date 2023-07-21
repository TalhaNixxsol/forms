import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './forms/loginform/loginform.component';
import { SignupformComponent } from './forms/signupform/signupform.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginformComponent
  },
  {
    path: '',
    component: LoginformComponent
  },
  {
    path: 'signup',
    component: SignupformComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
