import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  heThongDoiTac: any = [
    {
      logo: '../../../../../assets/img/apple.png',
      tenDoiTac: 'Apple',
    },
    {
      logo: '../../../../../assets/img/zoom.png',
      tenDoiTac: 'soundcloud',
    },
    {
      logo: '../../../../../assets/img/HP.png',
      tenDoiTac: 'HP',
    },
    {
      logo: '../../../../../assets/img/meta.png',
      tenDoiTac: 'Meta',
    },
    {
      logo: '../../../../../assets/img/microsoft.png',
      tenDoiTac: 'Microsoft',
    },
    {
      logo: '../../../../../assets/img/tiktok.png',
      tenDoiTac: 'tiktok',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
