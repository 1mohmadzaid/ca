import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public category!: String;
  public categoryList!: any[];
  constructor(
    public apiService: ApiService,
    public message: NzMessageService
  ) {}
  ngOnInit(): void {
    this.apiService.getCategory().subscribe((res) => {
      this.categoryList = res.map((e) => {
        let data: any = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    });
  }
  cancel(): void {
    this.message.info('Delete cancel');
  }

  confirm(category: any): void {
    this.apiService.deleteCategory(category);
    this.message.info('Delete Successfully');
  }

  public saveCategory(): void {
    this.apiService.addCategory({ category: this.category });
    this.category = '';
  }
}
