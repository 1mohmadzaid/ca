import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsroomComponent } from './newsroom.component';
import { SingleNewsComponent } from './single-news/single-news.component';

const routes: Routes = [
  {
    path:'',
    component:NewsroomComponent
  },
  {
    path:'singlenews/:id',
    component:SingleNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsroomRoutingModule { }
