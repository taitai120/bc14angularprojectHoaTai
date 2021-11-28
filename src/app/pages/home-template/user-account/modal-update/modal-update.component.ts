import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ShareDataUserService } from 'src/app/_core/services/share-data-user.service';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalUpdateComponent implements OnInit {
  @ViewChild('closebutton') closebutton: any;
  userInfo: any;

  updatedUser: any;

  constructor(
    private shareData: ShareDataUserService,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.shareData.shareUserInfo.subscribe((res: any) => {
      let { chiTietKhoaHocGhiDanh, ...info } = res;
      this.userInfo = info;
    });
  }

  update(user: any) {
    Object.keys(user).forEach((key) => {
      if (!user[key]) delete user[key];
    });

    this.updatedUser = Object.assign({}, this.userInfo, user, {
      maLoaiNguoiDung: 'HV',
      maNhom: 'GP08',
    });
    console.log(this.updatedUser);

    this.data
      .put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', this.updatedUser)
      .subscribe((res) => {
        // let updatedProfile = { ...this.updatedUser };
      });

    this.closebutton.nativeElement.click();
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/myaccount']));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã cập nhật thành công',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
