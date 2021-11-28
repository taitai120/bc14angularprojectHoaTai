import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplateRoutingModule } from './home-template-routing.module';
import { HomeTemplateComponent } from './home-template.component';
import { NavbarHomeComponent } from './_components/navbar-home/navbar-home.component';
import { FooterComponent } from './_components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeTemplateComponent,
    NavbarHomeComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeTemplateRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class HomeTemplateModule { }
