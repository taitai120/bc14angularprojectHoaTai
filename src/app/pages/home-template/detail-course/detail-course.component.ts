import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';
import {faStar} from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss'],
})
export class DetailCourseComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private data: DataService, private router: Router) {}
  id: any = ""
  faStar = faStar

  detailCourse: any = []

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    // localStorage.setItem("wait", JSON.stringify(true));
    // setTimeout(() => {
    //   localStorage.removeItem("wait");
    // }, 3000);
    this.getParamsFromUrl()

    this.getDetailCourse()

  }

  getParamsFromUrl() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
  }

  getDetailCourse() {
    this.data.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${this.id}`).subscribe((result: any)=>{

      this.detailCourse = result
      // console.log(typeof this.detailCourse.nguoiTao.taiKhoan);
      
    })
  }



  // bookCourse(){
  //   this.router.navigate(['book'])
  // }



}
