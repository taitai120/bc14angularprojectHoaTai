import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCourseRoutingModule } from './detail-course-routing.module';
import { DetailCourseComponent } from './detail-course.component';
import { ShareModuleModule } from 'src/app/_core/shares/share-module/share-module.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DetailCourseComponent
  ],
  imports: [
    CommonModule,
    DetailCourseRoutingModule,
    ShareModuleModule,
    FontAwesomeModule
  ]
})
export class DetailCourseModule { }
