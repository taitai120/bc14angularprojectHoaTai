import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-found',
  templateUrl: './course-found.component.html',
  styleUrls: ['./course-found.component.scss'],
})
export class CourseFoundComponent implements OnInit {
  @Input() course: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.course);
  }

  xemChiTiet() {
    this.router.navigate([`/detail/${this.course.maKhoaHoc}`]);
  }
}
