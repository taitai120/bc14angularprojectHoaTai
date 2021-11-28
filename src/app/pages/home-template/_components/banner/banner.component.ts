import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  couseCategory: any;
  searchValue: any;
  listCourse: any = [];


  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getListCourse();
  }

  onSubmit($event: any) {
    if ($event.keyCode === 13 || $event.type === "click")  {
      console.log("123");
      
      let isAvailableCourse = this.listCourse.filter((course: any) => {
        return course.tenKhoaHoc
          .toLowerCase()
          .trim()
          .includes(this.searchValue.toLowerCase().trim());
      });

      if (isAvailableCourse.length !== 0) {
        this.router.navigateByUrl(`search/${this.searchValue}`);
      } else {
        alert('Khóa học này không có');
      }
    }
  }

  getListCourse() {
    this.data
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08')
      .subscribe((res) => {
        console.log(res[0].tenKhoaHoc);
        this.listCourse = res;
      });
  }
}
