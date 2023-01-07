import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-newsroom',
  templateUrl: './newsroom.component.html',
  styleUrls: ['./newsroom.component.scss']
})
export class NewsroomComponent implements OnInit {
  public currPage:number = 1;
newsList: Array<News> = [];
constructor(private apiservice:ApiService){}
  ngOnInit(): void {
    this.apiservice.getNews().subscribe((res) => {
      this.newsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }
}
