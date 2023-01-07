import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

import { Editor } from 'ngx-editor';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.scss'],
})
export class AddnewsComponent implements OnInit, OnDestroy {
  public addNews: UntypedFormGroup;
  public categoryList: any;
  editor!: Editor;

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
      date: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.editor = new Editor();
    this.apiService.getCategory().subscribe((res) => {
      this.categoryList = res.map((e) => {
        const data = e.payload.doc.data();
        // const id = e.payload.doc.id
        return data;
      });
    });
  }
  ngOnDestroy(): void {
    this.editor.destroy();
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
