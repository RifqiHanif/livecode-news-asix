import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  exports: []
})
export class PagesModule { }
