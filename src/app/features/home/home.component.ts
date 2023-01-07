import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public newsList:any;
  constructor(private readonly apiservice:ApiService){}
  ngOnInit(): void {
    this.apiservice.getNews().subscribe((res) => {
      this.newsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      }).slice(0,3);
    });
  }
}
