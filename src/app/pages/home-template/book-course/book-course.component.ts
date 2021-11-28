import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-course',
  templateUrl: './book-course.component.html',
  styleUrls: ['./book-course.component.scss'],
})
export class BookCourseComponent implements OnInit {
  userInfo: any = localStorage.getItem('ClientUser');
  taiKhoan: any = JSON.parse(this.userInfo).taiKhoan;
  dataBookedCourse: any = { taiKhoan: this.taiKhoan };
  faArrowRight = faArrowRight

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    localStorage.setItem("wait", JSON.stringify(true));
    setTimeout(() => {
      localStorage.removeItem("wait");
    }, 3000);
    this.getParamsFromUrl();
  }

  getParamsFromUrl() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.dataBookedCourse = Object.assign(this.dataBookedCourse, params);
      console.log(this.dataBookedCourse);
    });
  }

  bookCourse() {
    this.data
      .post('QuanLyKhoaHoc/GhiDanhKhoaHoc', this.dataBookedCourse)
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (error) => {
          setTimeout(()=>{
            this.router.navigate(['/']);
          }, 3000)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bạn đã ghi danh thành công!',
            showConfirmButton: false,
            timer: 1500
          })
        }
      );
  }
}
