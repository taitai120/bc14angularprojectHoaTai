import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookCourseRoutingModule } from './book-course-routing.module';
import { BookCourseComponent } from './book-course.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    BookCourseComponent
  ],
  imports: [
    CommonModule,
    BookCourseRoutingModule,
    FontAwesomeModule
  ]
})
export class BookCourseModule { }
