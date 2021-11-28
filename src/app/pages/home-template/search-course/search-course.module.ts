import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCourseRoutingModule } from './search-course-routing.module';
import { SearchCourseComponent } from './search-course.component';
import { CourseFoundComponent } from './course-found/course-found.component';
import { ShareModuleModule } from 'src/app/_core/shares/share-module/share-module.module';


@NgModule({
  declarations: [
    SearchCourseComponent,
    CourseFoundComponent
  ],
  imports: [
    CommonModule,
    SearchCourseRoutingModule,
    ShareModuleModule
    
  ]
})
export class SearchCourseModule { }
