import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsroomRoutingModule } from './newsroom-routing.module';
import { NewsroomComponent } from './newsroom.component';
import { SingleNewsComponent } from './single-news/single-news.component';

@NgModule({
  declarations: [NewsroomComponent, SingleNewsComponent],
  imports: [
    CommonModule,
    NewsroomRoutingModule,
    NzListModule,
    NzAvatarModule,
    NzSpinModule,
    SharedModule,
    NzCardModule,
    NzGridModule,
    NzCommentModule,
    NzDividerModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzIconModule,
    NzMessageModule,
    NgxPaginationModule,
    NzInputModule,
  ],
})
export class NewsroomModule {}
