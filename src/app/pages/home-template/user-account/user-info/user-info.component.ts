import { Component, OnInit, Input } from '@angular/core';
import { ShareDataUserService } from 'src/app/_core/services/share-data-user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() userInfo: any;

  constructor(private shareDataUser: ShareDataUserService) {}

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }


  updateUserInfo(){
    this.shareDataUser.sharingDataUser(this.userInfo)
  }
}
