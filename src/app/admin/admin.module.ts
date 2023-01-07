import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';
import { AddnewsComponent } from './addnews/addnews.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdmincontactComponent } from './admincontact/admincontact.component';
import { CategoryComponent } from './category/category.component';
import { CommentComponent } from './comment/comment.component';
import { NewsComponent } from './news/news.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    AddnewsComponent,
    CategoryComponent,
    NewsComponent,
    CommentComponent,
    AdmincontactComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzIconModule,
    NzPopconfirmModule,
    NzMenuModule,
    NzFormModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTableModule,
    FormsModule,
    NzMessageModule,
    SharedModule,
    CKEditorModule,
  ],
})
export class AdminModule {}
