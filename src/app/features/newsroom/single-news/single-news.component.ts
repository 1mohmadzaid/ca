import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/shared/service/api.service';
@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss'],
})
export class SingleNewsComponent implements OnInit {
  public title!: string;
  public author!: string;
  public category!: string;
  public date!: any;
  public description!: string;
  public comments: any[] = []; //past commets
  public validateComment!: UntypedFormGroup;
  public submitting = false;
  public loading = true;
 
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiservice: ApiService,
    private fb: UntypedFormBuilder,
    private message: NzMessageService
  ) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.apiservice.getNewsById(id).subscribe((res: any) => {
      this.title = res.title;
      this.author = res.author;
      this.category = res.category;
      this.date = res.date;
      this.description = res.description;
      this.loading = false;
    });
    this.apiservice.getComments().subscribe((res) => {
      this.comments = res
        .map((e) => {
          const data: any = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
        .filter((d) => {
          return d.newsId === id;
        });
    });

    this.validateComment = this.fb.group({
      newsId: [id],
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      comment: ['', Validators.required],
      commentDate: [new Date()],
    });
  }

  commentSubmit(): void {
    console.log(this.validateComment.value);
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      if (this.validateComment.valid) {
        this.apiservice.addComments(this.validateComment.value);
        this.message.success('Your Comment added');
        this.validateComment.reset();
      } else {
        this.message.error('Something Was Wrong');
      }
    }, 800);
  }
}
