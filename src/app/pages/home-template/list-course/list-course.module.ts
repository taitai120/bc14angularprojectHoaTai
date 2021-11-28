import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCourseRoutingModule } from './list-course-routing.module';
import { ListCourseComponent } from './list-course.component';
import { ShareModuleModule } from 'src/app/_core/shares/share-module/share-module.module';



@NgModule({
  declarations: [
    ListCourseComponent,
  ],
  imports: [
    CommonModule,
    ListCourseRoutingModule,
    ShareModuleModule
  ]
})
export class ListCourseModule { }
