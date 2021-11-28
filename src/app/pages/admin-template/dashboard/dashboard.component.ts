import { Component, OnInit } from '@angular/core';
import {faBars, faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faBars = faBars
  faAngleDoubleLeft = faAngleDoubleLeft
  itemSuaPhim: any;
  flag: any;
  

  userEdit: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openModalUser(user: any) {
    this.userEdit = user;
  }

  suaPhim(event: any) {
    this.itemSuaPhim = event;
  }
}
