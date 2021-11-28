import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserAccountComponent implements OnInit {
  clientUser: any = localStorage.getItem('ClientUser');
  taiKhoan: any = JSON.parse(this.clientUser).taiKhoan;
  matKhau: any;
  userKeyword: any;
  userInfoFromApi: any;
  listMyCourses: any;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.getPassword();
    this.getUserInfo();
  }

  getPassword() {
    this.data
      .get(
        `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP08&tuKhoa=${this.taiKhoan}`
      )
      .subscribe((res) => {
        this.matKhau = res[0].matKhau;
      });
  }

  getUserInfo() {
    this.userKeyword = Object.assign(
      {},
      { taiKhoan: this.taiKhoan },
      { matKhau: this.matKhau }
    );
    this.data
      .post('QuanLyNguoiDung/ThongTinTaiKhoan', this.userKeyword)
      .subscribe((res) => {
        this.userInfoFromApi = res;
        this.listMyCourses = res.chiTietKhoaHocGhiDanh;
      });
  }
}
