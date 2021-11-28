import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from './home-template.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      // home
      {
        path: '',
        loadChildren: () => import('./home/home.module').then((m)=>m.HomeModule)
      },

      // list-course
      {
        path: 'list-course/:category',
        loadChildren: () => import('./list-course/list-course.module').then((m)=>m.ListCourseModule)

      },
      {
        path: 'detail/:id',
        loadChildren: () => import('./detail-course/detail-course.module').then((m) => m.DetailCourseModule)
      },
      {
        path: 'search/:searchInput',
        loadChildren: () => import('./search-course/search-course.module').then((m)=>m.SearchCourseModule)
      },
      {
        path: 'book',
        loadChildren: () => import('./book-course/book-course.module').then((m)=>m.BookCourseModule)
      },
      {
        path: 'myaccount',
        loadChildren: () => import('./user-account/user-account.module').then((m)=>m.UserAccountModule)
      }
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTemplateRoutingModule { }
