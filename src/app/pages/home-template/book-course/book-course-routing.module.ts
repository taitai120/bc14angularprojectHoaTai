import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookGuard } from 'src/app/_core/guards/book.guard';
import { BookCourseComponent } from '../book-course/book-course.component';

const routes: Routes = [{
  path:'',
  component: BookCourseComponent,
  canActivate: [BookGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookCourseRoutingModule { }
