// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }

// }

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class BookGuard implements CanActivate {

  status:boolean =true
constructor(private router: Router){}

ngOnInit(): void {
  localStorage.setItem('wait', JSON.stringify(true));
  setTimeout(() => {
    localStorage.removeItem('wait');
  }, 3000);
}

  canActivate() {
    // Client đã log in
    if (localStorage.getItem('ClientUser')) {
      return true;
    }
    // Chưa Login - chuyển hướng về trang đăng nhập
    this.router.navigate(['/login'])
    return false
  }

  ngDoCheck() {
    if (localStorage.getItem("wait")) {
      this.status = true;
    }
    if (!localStorage.getItem("wait")) {
      this.status = false;
    }
  }
}
