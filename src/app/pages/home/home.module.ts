import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { Content3Component } from './content3/content3.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    Content1Component,
    Content2Component,
    Content3Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
