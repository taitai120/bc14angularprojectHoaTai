import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss'],
})
export class SearchCourseComponent implements OnInit {
  courseSearched: any = [];
  searchKeyword: any;
  sub = new Subscription();

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    localStorage.setItem("wait", JSON.stringify(true));
    setTimeout(() => {
      localStorage.removeItem("wait");
    }, 3000);
    this.getParamUrl();
    this.getListCourseSearch();
  }

  getParamUrl() {
    this.searchKeyword =
      this.activatedRoute.snapshot.paramMap.get('searchInput');
  }

  getListCourseSearch() {
    this.sub = this.data
      .get(
        `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${this.searchKeyword}&MaNhom=GP08`
      )
      .subscribe((res) => {
        this.courseSearched = res;
      });
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
