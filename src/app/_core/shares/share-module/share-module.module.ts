import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from 'src/app/components/course/course.component';
import { SeperationSectionComponent } from 'src/app/components/seperation-section/seperation-section.component';

@NgModule({
  declarations: [CourseComponent, SeperationSectionComponent],
  exports: [CourseComponent, SeperationSectionComponent],
  imports: [
    CommonModule
  ]
})
export class ShareModuleModule { }
