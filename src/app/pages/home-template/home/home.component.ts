import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listCourse: any = [];
  subListCourse = new Subscription();
  constructor(private data: DataService) {}

  ngOnInit(): void {
    localStorage.setItem('wait', JSON.stringify(true));
    setTimeout(() => {
      localStorage.removeItem('wait');
    }, 3000);
    this.getCourse();
  }

  getCourse() {
    this.subListCourse = this.data
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08')
      .subscribe((result) => {
        this.listCourse = result;
        console.log(this.listCourse);
      });
  }

  ngOnDestroy() {
    this.subListCourse.unsubscribe();
  }
}
