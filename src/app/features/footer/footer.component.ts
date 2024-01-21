import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public zaidUrlList!: any[];
  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.apiservice.getZaidUrl().subscribe((res) => {
      this.zaidUrlList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }
}
