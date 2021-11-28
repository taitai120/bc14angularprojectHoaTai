import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm: any

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('wait', JSON.stringify(true));
    setTimeout(() => {
      localStorage.removeItem('wait');
    }, 3000);
  }
   
  @HostListener('window:before', ['$event'])
  canDeactivateRegister(){
    return !this.registerForm.dirty
  }


  register(user: any) {
    user.maNhom = 'GP08';
    user.maLoaiNguoiDung = 'HV';
    this.data.post('QuanLyNguoiDung/DangKy', user).subscribe((res) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đăng ký thành công',
        showConfirmButton: false,
        timer: 3000,
      })
        this.router.navigate(['/login'])
    });
  }

 
}
