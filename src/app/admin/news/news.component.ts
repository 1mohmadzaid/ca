import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { News } from 'src/app/interfaces/news';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public newsList!: News[];

  constructor(
    public apiservice: ApiService,
    public message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.apiservice.getNews().subscribe((res) => {
      this.newsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });

    console.log(this.newsList);
    
  }
  listOfColumn = [
    {
      title: 'Author name',
      compare: (a: News, b: News) => a.author.localeCompare(b.author),
      priority: false,
    },
    {
      title: 'Title',
      compare: (a: News, b: News) => a.title.localeCompare(b.title),
      priority: 3,
    },
    {
      title: 'Categories',
      compare: (a: News, b: News) => a.category.localeCompare(b.category),
      priority: 2,
    },
    {
      title: 'Date',
      compare: (a: News, b: News) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
      priority: 1,
    },
    {
      title: 'Description',
      compare: (a: News, b: News) => a.description.localeCompare(b.description),
      priority: 4,
    },
  ];
  cancel(): void {
    this.message.info('Delete cancel');
  }

  confirm(news: any): void {
    console.log('confirm click');
    this.apiservice.deleteNews(news);
    this.message.info('Delete Successfully');
  }
}
