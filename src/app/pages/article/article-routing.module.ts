import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
  {
    path: '',
    component: ArticleComponent
  },
  {
    path: '',
    component: SampleComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }