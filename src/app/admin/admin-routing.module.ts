import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../shared/guard/authguard.guard';
import { AddnewsComponent } from './addnews/addnews.component';
import { AdminComponent } from './admin.component';
import { AdmincontactComponent } from './admincontact/admincontact.component';
import { CategoryComponent } from './category/category.component';
import { CommentComponent } from './comment/comment.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'news', pathMatch: 'full' },
      { path: 'news', component: NewsComponent, canActivate: [AuthguardGuard] },
      {
        path: 'addnews',
        component: AddnewsComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: 'category',
        component: CategoryComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: 'comments',
        component: CommentComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: 'contact',
        component: AdmincontactComponent,
        canActivate: [AuthguardGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
