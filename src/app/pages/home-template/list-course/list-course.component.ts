import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss'],
})
export class ListCourseComponent implements OnInit {
  category: any;
  listCourseByCategory: any = [];
  categoryName: any;
  subListCourse = new Subscription

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    localStorage.setItem("wait", JSON.stringify(true));
    setTimeout(() => {
      localStorage.removeItem("wait");
    }, 3000);
    this.getParamsFrormUrl();
    this.getListByCategory();
  }

  getParamsFrormUrl() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    console.log(this.category);
  }

  getListByCategory() {
    this.subListCourse = this.data
      .get(
        `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${this.category}&MaNhom=GP08`
      )
      .subscribe((result) => {
        this.listCourseByCategory = result;
        this.categoryName =
          this.listCourseByCategory[1].danhMucKhoaHoc.tenDanhMucKhoaHoc;
        console.log(this.categoryName);
      });
  }

  ngOnDestroy(){
    this.subListCourse.unsubscribe()
  }
}
