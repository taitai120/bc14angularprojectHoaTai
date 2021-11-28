import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-booked-course',
  templateUrl: './booked-course.component.html',
  styleUrls: ['./booked-course.component.scss'],
})
export class BookedCourseComponent implements OnInit {
  @Input() course: any;
  courseDetail: any;
  userInfo: any = localStorage.getItem('ClientUser');
  taiKhoan: any = JSON.parse(this.userInfo).taiKhoan;
  bookedCourse: any = { taiKhoan: this.taiKhoan };

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getCourseDetail();
  }

  getCourseDetail() {
    this.data
      .get(
        `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${this.course.maKhoaHoc}`
      )
      .subscribe((res) => {
        this.courseDetail = res;
      });
  }

  cancelCourse() {
    this.bookedCourse = Object.assign({}, this.bookedCourse, {
      maKhoaHoc: this.course.maKhoaHoc,
    });

    this.data
      .post('QuanLyKhoaHoc/HuyGhiDanh', this.bookedCourse)
      .subscribe((res: any) => {});

    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã hủy ghi danh thành công!',
      showConfirmButton: false,
      timer: 1500
    })
    
  }
  
}
