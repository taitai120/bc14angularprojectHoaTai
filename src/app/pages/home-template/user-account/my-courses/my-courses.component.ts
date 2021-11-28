import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss'],
})
export class MyCoursesComponent implements OnInit {
  @Input() listMyCourses: any;

  searchValue: any

  constructor() {}

  ngOnInit(): void {
  }


 onSubmit($event: any) {
    if ($event.keyCode === 13) {
      if (this.searchValue) {
        let courseFound = this.listMyCourses.filter((course: any) => {
          return course.tenKhoaHoc
            .toLowerCase()
            .trim()
            .includes(this.searchValue.toLowerCase().trim());
        });

        if (courseFound.length !== 0) {
          this.listMyCourses = courseFound;
        }
      }
    }
  }


}







  // clientUser: any = localStorage.getItem('ClientUser');
  // taiKhoan: any = JSON.parse(this.clientUser).taiKhoan;
  // matKhau: any;
  // userKeyword: any;
  // userInfoFromApi: any;
  // listMyCourses: any;


  // getPassword() {
  //   this.data
  //     .get(
  //       `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP08&tuKhoa=${this.taiKhoan}`
  //     )
  //     .subscribe((res:any) => {
  //       this.matKhau = res[0].matKhau;
  //     });
  // }

  // getUserInfo() {
  //   this.userKeyword = Object.assign(
  //     {},
  //     { taiKhoan: this.taiKhoan },
  //     { matKhau: this.matKhau }
  //   );
  //   this.data
  //     .post('QuanLyNguoiDung/ThongTinTaiKhoan', this.userKeyword)
  //     .subscribe((res:any) => {
  //       this.userInfoFromApi = res;
  //       this.listMyCourses = res.chiTietKhoaHocGhiDanh;
  //     });
  // }

  // assignCopy() {
  //   this.filteredItems = Object.assign([], this.listMyCourses);
  // }

  
  // filterItem(value: any) {
  //   console.log(value);
    
  //   if (!value) {
  //     this.listMyCourses = this.assignCopy();
  //   } 
  //   this.listMyCourses = Object.assign([], this.listMyCourses).filter((item: any) => {
  //      item.tenKhoaHoc.toLowerCase().trim().includes(value.toLowerCase().trim())
  //   })
  // }