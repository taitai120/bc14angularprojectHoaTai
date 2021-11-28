import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterNavbarRoutingModule } from './register-navbar-routing.module';
import { RegisterNavbarComponent } from './register-navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterNavbarComponent
  ],
  imports: [
    CommonModule,
    RegisterNavbarRoutingModule,
    FormsModule

  ]
})
export class RegisterNavbarModule { }
