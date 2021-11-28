import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: any

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  routerLinkDetail() {
    this.router.navigate([`/detail/${this.course.maKhoaHoc}`])
  }
}
