import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginNavbarComponent } from './login-navbar.component';

const routes: Routes = [
  {
    path: '',
    component: LoginNavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginNavbarRoutingModule { }
