import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginNavbarRoutingModule } from './login-navbar-routing.module';
import { LoginNavbarComponent } from './login-navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginNavbarComponent
  ],
  imports: [
    CommonModule,
    LoginNavbarRoutingModule,
    FormsModule
  ]
})
export class LoginNavbarModule { }
