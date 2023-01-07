import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-admincontact',
  templateUrl: './admincontact.component.html',
  styleUrls: ['./admincontact.component.scss']
})
export class AdmincontactComponent {
  public contactList!: any[];
  constructor(
    public message: NzMessageService,
    private apiservice: ApiService
  ) {}

  ngOnInit(): void {
    this.apiservice.getContact().subscribe((res) => {
      this.contactList = res.map((e: any) => {
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
      title: 'Subject',
      compare: (a: any, b: any) => a.subject.localeCompare(b.subject),
      priority: 2,
    },
    {
      title: 'Date',
      compare: (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
      priority: 1,
    },
    {
      title: 'Message',
      compare: (a: any, b: any) => a.message.localeCompare(b.message),
      priority: 4,
    },
  ];

  cancel(): void {
    this.message.info('Delete cancel');
  }

  confirm(comment: any): void {
    console.log('confirm click');
    this.apiservice.deleteContact(comment);
    this.message.info('Delete Successfully');
  }
}
