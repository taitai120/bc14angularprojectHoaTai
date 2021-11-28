import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { NgForm, ControlContainer } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-user-manager',
  templateUrl: './modal-user-manager.component.html',
  styleUrls: ['./modal-user-manager.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class ModalUserManagerComponent implements OnInit {
  @Input() userEdit: any;
  @ViewChild('formQuanLyThanhVien', { static: false })
  formQuanLyThanhVien!: NgForm;

  user: any = {
    taiKhoan: '',
    hoTen: '',
    email: '',
    soDT: '',
    matKhau: '',
    maLoaiNguoiDung: 'HV',
  };

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    if (this.formQuanLyThanhVien) {
      if (this.userEdit) {
        this.formQuanLyThanhVien.setValue({ ...this.userEdit });
      } else {
        this.formQuanLyThanhVien.setValue({ ...this.user });
      }
    }
  }

  handleOnSubmit() {
    this.user.taiKhoan = this.formQuanLyThanhVien.value.taiKhoan;
    this.user.hoTen = this.formQuanLyThanhVien.value.hoTen;
    this.user.email = this.formQuanLyThanhVien.value.email;
    this.user.soDT = this.formQuanLyThanhVien.value.soDT;
    this.user.matKhau = this.formQuanLyThanhVien.value.matKhau;
    this.user.maLoaiNguoiDung = this.formQuanLyThanhVien.value.maLoaiNguoiDung;


    if (this.userEdit) {
      console.log(this.userEdit);

      this.user.taiKhoan = this.userEdit.taiKhoan;
      this.user.maLoaiNguoiDung = this.userEdit.maLoaiNguoiDung;

      this.data
        .put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', {
          ...this.user,
          maNhom: 'GP08',
        })
        .subscribe(
          () => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            })
            .then(() => {
              window.location.reload();
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
    } else {
      this.data
        .post('QuanLyNguoiDung/ThemNguoiDung', { ...this.user, maNhom: 'GP08' })
        .subscribe(
          () => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            })
            .then(() => {
              window.location.reload();
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
  }
}
