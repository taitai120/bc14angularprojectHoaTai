import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShareDataUserService {
  userProfile: any = new BehaviorSubject({} as Object)
  
  // Chiều data về từ component user-account 
  shareUserInfo = this.userProfile.asObservable()


  constructor() { }

  sharingDataUser(_userProfile: any){
    this.userProfile.next(_userProfile)
  }
}
