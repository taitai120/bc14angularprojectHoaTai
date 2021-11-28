import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { CourseManagerComponent } from './course-manager/course-manager.component';
import { ModalCourseManagerComponent } from './modal-course-manager/modal-course-manager.component';
import { ModalUserManagerComponent } from './modal-user-manager/modal-user-manager.component';
import { MaterialModule } from 'src/app/_core/shares/material-module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    UserManagerComponent,
    CourseManagerComponent,
    ModalCourseManagerComponent,
    ModalUserManagerComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class DashboardModule { }
