import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { UserAccountComponent } from './user-account.component';
import { MaterialModule } from 'src/app/_core/shares/material-module';
import { UserInfoComponent } from './user-info/user-info.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ModalUpdateComponent } from './modal-update/modal-update.component';
import { FormsModule } from '@angular/forms';
import { BookedCourseComponent } from './my-courses/booked-course/booked-course.component';
import { ShareModuleModule } from 'src/app/_core/shares/share-module/share-module.module';

@NgModule({
  declarations: [
    UserAccountComponent,
    UserInfoComponent,
    MyCoursesComponent,
    ModalUpdateComponent,
    BookedCourseComponent
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    MaterialModule,
    ShareModuleModule,
    FormsModule
  ]
})
export class UserAccountModule { }
