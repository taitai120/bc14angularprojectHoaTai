import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-manager',
  templateUrl: './course-manager.component.html',
  styleUrls: ['./course-manager.component.scss'],
})
export class CourseManagerComponent implements OnInit {
  @Output() eventEditMovie = new EventEmitter();
  @Output() eventSuaPhim = new EventEmitter();
  @Input() indexXoa: any;
  keyword: any;
  mangDanhSachPhim: any = [];
  flagEditAdd: any;

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getListMovie();
  }

  getListMovie() {
    this.data
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08')
      .subscribe((res) => {
        this.mangDanhSachPhim = res;
        console.log(this.mangDanhSachPhim);
        
      });
  }

  suaPhim(item: any) {
    this.flagEditAdd = false;
    this.eventEditMovie.emit(this.flagEditAdd);
    this.eventSuaPhim.emit(item);
  }

  themPhim() {
    this.flagEditAdd = true;
    this.eventEditMovie.emit(this.flagEditAdd);
  }

  xoaPhim(item: any) {
    console.log(item.maPhim);
    const uri = `QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${item.maKhoaHoc} `;
    this.data.delete(uri).subscribe(
      (data: any) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.getListMovie();
        });
      },
      (err) => {
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
      .get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08')
      .subscribe((data) => {
        this.mangDanhSachPhim = data;
        if (this.keyword) {
          this.mangDanhSachPhim = this.mangDanhSachPhim.filter((item: any) => {
            if (item.maKhoaHoc !== null || item.tenKhoaHoc !== null) {
              return (
                item.tenKhoaHoc
                  .toLowerCase()
                  .indexOf(this.keyword.toLowerCase()) !== -1 ||
                item.maKhoaHoc
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
