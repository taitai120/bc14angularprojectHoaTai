import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from '../_components/banner/banner.component';
import { ShareModuleModule } from 'src/app/_core/shares/share-module/share-module.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModuleModule,
    FormsModule
  ]
})
export class HomeModule { }
