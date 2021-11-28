import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-navbar',
  templateUrl: './login-navbar.component.html',
  styleUrls: ['./login-navbar.component.scss']
})
export class LoginNavbarComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('wait', JSON.stringify(true));
    setTimeout(() => {
      localStorage.removeItem('wait');
    }, 3000);
  }

  login(user: any) {
    user.maNhom = 'GP08';
    user.maLoaiNguoiDung = 'HV';
    this.data.post('QuanLyNguoiDung/DangNhap', user).subscribe((res) => {
      if (res.maLoaiNguoiDung === 'HV') {
        localStorage.setItem('ClientUser', JSON.stringify(res));
        this.router.navigate(['/']);
      } else if (res.maLoaiNguoiDung === 'GV') {
        alert('Không thể đăng nhập bằng tài khoản này');
      }
    });
  }

  register(){
    this.router.navigate(['/register-navbar'])
  }

}
