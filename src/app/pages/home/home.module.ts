import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home.component';
import { ServiceComponent } from './service/service.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    ServiceComponent,
    PortofolioComponent,
    TodoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent]
})
export class HomeModule { }