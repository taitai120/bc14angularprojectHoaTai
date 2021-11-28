import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import Swal from 'sweetalert2';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss'],
})
export class UserManagerComponent implements OnInit {
  @Output() eventEditUser = new EventEmitter();
  faWindowClose = faWindowClose; // Icon
  keyword: string = '';

  listUsers: any;

  constructor(private data: DataService, private router:Router) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.data
      .get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08')
      .subscribe((res) => {
        this.listUsers = res;
      });
  }

  suaNguoiDung(user: any) {
    this.eventEditUser.emit(user);
  }

  themNguoiDung() {
    this.eventEditUser.emit(null);
  }

  xoaNguoiDung(taiKhoan: any) {
    this.data
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
      .subscribe(
        (data: any) => {
          console.log(data);

          Swal.fire({
            position: 'center',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          })
          .then(() => {
            this.handleSearch();
          });
        },
        (err: any) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          })
        }
      );
  }

  handleSearch() {
    this.data
      .get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08')
      .subscribe((res) => {
        this.listUsers = res;
        if (this.keyword) {
          this.listUsers = this.listUsers.filter((item: any) => {
            if (item.hoTen !== null || item.taiKhoan !== null) {
              return (
                item.hoTen.toLowerCase().indexOf(this.keyword.toLowerCase()) !==
                  -1 ||
                item.taiKhoan
                  .toLowerCase()
                  .indexOf(this.keyword.toLowerCase()) !== -1
              );
            } else {
              return;
            }
          });
        }
      });
  }

  Logout(){
    localStorage.removeItem("UserAdmin")
    this.router.navigateByUrl('/')
  }
}
