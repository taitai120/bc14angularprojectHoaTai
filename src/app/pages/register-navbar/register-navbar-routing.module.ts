import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterNavbarComponent } from './register-navbar.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterNavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterNavbarRoutingModule { }
