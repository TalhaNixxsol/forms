import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './forms/loginform/loginform.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginformComponent
  },
  {
    path: '',
    component: LoginformComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
