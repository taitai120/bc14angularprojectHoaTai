import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss'],
})
export class NavbarHomeComponent implements OnInit {
  // font-awesome
  faBars = faBars
  faSearch = faSearch
  faUser = faUser


  couseCategory: any;
  searchValue: any;
  listCourse: any = [];
  condition: boolean = false;

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.checkLogin();
    this.getCategory();
    this.getListCourse();
  }

  getCategory() {
    this.data.get('QuanLyKhoaHoc/LayDanhMucKhoaHoc').subscribe((result) => {
      this.couseCategory = result;
    });
  }

  checkLogin() {
    if (localStorage.getItem('ClientUser')) {
      this.condition = true;
    }
  }

  onSubmit($event: any) {
    if ($event.keyCode === 13) {
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

  logOut(){
    localStorage.removeItem("ClientUser")
    this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/`]);
  });
  }

  viewAccount(){
    this.router.navigateByUrl('myaccount')
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}

