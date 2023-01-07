import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  public commentList!: any[];
  constructor(
    public message: NzMessageService,
    private apiservice: ApiService
  ) {}

  ngOnInit(): void {
    this.apiservice.getComments().subscribe((res) => {
      this.commentList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }
  listOfColumn = [
    {
      title: 'Name',
      compare: (a: any, b: any) => a.name.localeCompare(b.name),
      priority: false,
    },
    {
      title: 'Email',
      compare: (a: any, b: any) => a.email.localeCompare(b.email),
      priority: 3,
    },
    {
      title: 'Comment',
      compare: (a: any, b: any) => a.comment.localeCompare(b.comment),
      priority: 2,
    },
    {
      title: 'Date',
      compare: (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
      priority: 1,
    },
    {
      title: 'NewsId',
      compare: (a: any, b: any) => a.newsId.localeCompare(b.newsId),
      priority: 4,
    },
  ];

  cancel(): void {
    this.message.info('Delete cancel');
  }

  confirm(comment: any): void {
    console.log('confirm click');
    this.apiservice.deleteComment(comment);
    this.message.info('Delete Successfully');
  }
}
