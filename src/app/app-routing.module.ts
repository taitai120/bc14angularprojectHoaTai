import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // home-template
  {
    path: '',
    loadChildren: () =>
      import('./pages/home-template/home-template.module').then(
        (m) => m.HomeTemplateModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  // admin
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin-template/admin-template.module').then(
        (m) => m.AdminTemplateModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'login-navbar',
    loadChildren: ()=> import('./pages/login-navbar/login-navbar.module').then((m)=>m.LoginNavbarModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path:'register-navbar',
    loadChildren: () => import('./pages/register-navbar/register-navbar.module').then((m)=>m.RegisterNavbarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
