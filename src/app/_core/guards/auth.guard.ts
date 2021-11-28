import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(){
    if(localStorage.getItem("UserAdmin")){
      return true
    }
    this.router.navigate(['/auth'])
    return false
  }
  
}
