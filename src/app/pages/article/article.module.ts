import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { News1Component } from './news1/news1.component';
import { News2Component } from './news2/news2.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { SampleComponent } from './sample/sample.component';



@NgModule({
  declarations: [
    ArticleComponent,
    News1Component,
    News2Component,
    SampleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule { }
