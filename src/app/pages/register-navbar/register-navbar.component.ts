import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-navbar',
  templateUrl: './register-navbar.component.html',
  styleUrls: ['./register-navbar.component.scss'],
})
export class RegisterNavbarComponent implements OnInit {
  @ViewChild('registerForm') registerForm: any;

  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {
    localStorage.setItem('wait', JSON.stringify(true));
    setTimeout(() => {
      localStorage.removeItem('wait');
    }, 3000);
  }

  register(user: any) {
    user.maNhom = 'GP08';
    user.maLoaiNguoiDung = 'HV';
    this.data.post('QuanLyNguoiDung/DangKy', user).subscribe((res) => {
      // Redirect về trang đăng nhập
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đăng ký thành công',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['/login-navbar']);
    });
  }

  @HostListener('window:before', ['$event'])
  canDeactivateRegister() {
    return !this.registerForm.dirty;
  }
}
