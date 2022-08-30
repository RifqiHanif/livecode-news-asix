import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortofolioComponent } from './pages/home/portofolio/portofolio.component'
import { TodoComponent } from './pages/home/todo/todo.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'portofolio',
    component: PortofolioComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  }
  // {
  //   path: 'todo',
  //   component: 
  // }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }