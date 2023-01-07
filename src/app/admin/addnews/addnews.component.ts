import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';


import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-addnews',

  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.scss'],
})
export class AddnewsComponent implements OnInit {
  public addNews: UntypedFormGroup;
  public categoryList: any;
  public Editor = ClassicEditor;

  constructor(
    private apiService: ApiService,
    private fb: UntypedFormBuilder,
    public message: NzMessageService
  ) {
    this.addNews = this.fb.group({
      login_id:[localStorage.getItem('login_id')],
      author: ['CA. Yasar Pathan', [Validators.required]],
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      date: [new Date(), [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.apiService.getCategory().subscribe((res) => {
      this.categoryList = res.map((e) => {
        const data = e.payload.doc.data();
        return data;
      });
    });
  }

  public onSubmitNewsForm() {
    if (this.addNews.valid) {
      this.apiService.addNews(this.addNews.value);
      this.message.success('News added successfully');
      this.addNews.reset();
    } else {
      this.message.error('something was Wrong');
    }
  }
}
